# Draws art/score-back.svg and art/score-front.svg, and prints the divider path.
# Run: python3 art/build-score.py art
import math, sys
out = sys.argv[1]
W, H, MID = 1200, 200, 100
r = lambda v: f'{v:.1f}'.rstrip('0').rstrip('.')
def svg(name, body, sw):
    open(f'{out}/{name}.svg', 'w').write(
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" fill="none" stroke="#000" '
        f'stroke-width="{sw}" stroke-linecap="round" stroke-linejoin="round">\n{body}\n</svg>\n')
def P(d, extra=''): return f'<path d="{d}"{extra}/>'

LINES = [MID + d for d in (-30, -15, 0, 15, 30)]          # the five staff lines
X0, MORPH0, MORPH1, NET0 = 20, 400, 700, 800
def smooth(t):
    t = max(0, min(1, t)); return t*t*(3 - 2*t)
def wave(x):
    # drum hits every 62px, each ringing down; silent before the staff lets go
    s = smooth((x - MORPH0) / (MORPH1 - MORPH0))
    if s == 0: return 0, 0
    ph = (x - MORPH0) % 62
    env = math.exp(-ph / 20) * (1 if ph > 1.5 else ph / 1.5)
    fade = 1 - smooth((x - 740) / 60)                      # settles before the network
    return s, 46 * s * env * fade * math.sin(2 * math.pi * ph / 7.5)

# ---------- back: staff lines that pull together into one wave; the network's wires ----------
back = []
for y in LINES:
    pts, x = [], X0
    while x <= NET0 + 4:
        s, a = wave(x)
        pts.append(f'{r(x)} {r(MID + (y - MID) * (1 - s) + a)}')
        x += 1.5 if x >= MORPH0 else MORPH0 - X0
    back.append(P('M' + 'L'.join(pts)))
layers = [[(NET0 + 10, MID)],
          [(890, MID + d) for d in (-45, 0, 45)],
          [(980, MID + d) for d in (-60, -20, 20, 60)],
          [(1070, MID + d) for d in (-45, 0, 45)],
          [(1146, MID)]]
RAD = [6, 6, 6, 6, 24]
wires = ''
for i in range(len(layers) - 1):
    for (x1, y1) in layers[i]:
        for (x2, y2) in layers[i + 1]:
            L = math.hypot(x2 - x1, y2 - y1); ux, uy = (x2 - x1) / L, (y2 - y1) / L
            a, b = RAD[i] + 2, RAD[i + 1] + 2
            wires += f'M{r(x1 + ux*a)} {r(y1 + uy*a)}L{r(x2 - ux*b)} {r(y2 - uy*b)}'
back.append(P(wires, ' stroke-width="1.1"'))
back.append(P(f'M1172 {MID}H1210'))
svg('score-back', '\n'.join(back), 1.6)

# ---------- front: the beat, the network's nodes, the person at the end ----------
fr = []
fr.append(P(f'M36 {MID-15}V{MID+15}M45 {MID-15}V{MID+15}', ' stroke-width="4.5" stroke-linecap="butt"'))   # percussion clef
fr.append(P(f'M{X0} {MID-30}V{MID+30}M222 {MID-30}V{MID+30}'))                                          # bar lines
def head(x, y): return f'<ellipse cx="{r(x)}" cy="{r(y)}" rx="6.8" ry="4.8" transform="rotate(-20 {r(x)} {r(y)})" fill="#000" stroke="none"/>'
HAT, SNARE, KICK = MID - 38, MID - 7.5, MID + 22.5
for bar, kicks in ((0, (0, 4)), (1, (0, 5))):
    x0 = 72 + bar * 168
    xs = [x0 + 19 * i for i in range(8)]
    hats = ''.join(f'M{x-4.5} {HAT-4.5}l9 9M{x-4.5} {HAT+4.5}l9 -9' for x in xs)
    fr.append(P(hats, ' stroke-width="1.7"'))
    stems = ''.join(f'M{x+5.5} {(SNARE if i in (2, 6) else HAT) - 1}V{MID-78}' for i, x in enumerate(xs))
    fr.append(P(stems, ' stroke-width="1.5"'))
    for g in (0, 4):
        fr.append(P(f'M{xs[g]+5.5} {MID-78}H{xs[g+3]+5.5}', ' stroke-width="5" stroke-linecap="butt"'))
    for i in (2, 6): fr.append(head(xs[i], SNARE))
    for i in kicks:
        fr.append(head(xs[i], KICK))
        fr.append(P(f'M{xs[i]-6} {KICK+1}V{MID+62}', ' stroke-width="1.5"'))
for i, layer in enumerate(layers[:-1]):
    for (x, y) in layer:
        fr.append(f'<circle cx="{x}" cy="{r(y)}" r="{RAD[i]}"/>')
px, py = layers[-1][0]
fr.append(f'<circle cx="{px}" cy="{py}" r="24"/>')
fr.append(f'<circle cx="{px}" cy="{py}" r="31" stroke-dasharray="1 7" stroke-width="2.4"/>')
fr.append(f'<circle cx="{px}" cy="{py-7}" r="6"/>')
fr.append(P(f'M{px-12} {py+14}a12 11 0 0 1 24 0'))
svg('score-front', '\n'.join(fr), 2)

# ---------- divider: one drum hit, ringing out both ways from the centre ----------
pts = []
for i in range(0, 241):
    d = abs(i - 120)
    pts.append(f'{i} {r(16 + 13 * math.exp(-d / 26) * math.cos(2 * math.pi * d / 9))}')
print('M' + 'L'.join(pts))
