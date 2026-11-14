# Draws art/skyline-{far,mid,front}.svg. Run: python3 art/build-skyline.py art
import random, sys
out = sys.argv[1]
def svg(name, body, sw):
    open(f'{out}/{name}.svg','w').write(
      f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 300" fill="none" stroke="#000" stroke-width="{sw}" stroke-linecap="round" stroke-linejoin="round">\n{body}\n</svg>\n')
def P(d, extra=''): return f'<path d="{d}"{extra}/>'
r = lambda v: f'{v:.1f}'.rstrip('0').rstrip('.')

# ---------- far: hills, a citadel, a palace ----------
far = []
far.append(P('M-20 250C80 236 150 172 250 152C300 142 340 142 380 153C470 180 520 232 640 250'))
far.append(P('M258 149h96v-9h-96zM270 140v-6h12v6M330 140v-6h12v6'))          # citadel wall
far.append(P('M306 134V104M300 104h12M306 104l-7-14M306 104l7-14M299 90q7-9 14 0'))  # monument
far.append(P('M900 250C1040 242 1150 112 1300 100C1450 112 1560 200 1640 250'))
far.append(P('M1214 104v-20h172v20M1208 84h184'))                                      # palace on the hill
far.append(P('M1222 95H1380', ' stroke-dasharray="1 8" stroke-width="4"'))
far.append(P('M1284 84v-12h32v12M1280 72h40M1285 72Q1285 50 1300 42Q1315 50 1315 72M1300 42V32M1293 72Q1294 54 1300 42M1307 72Q1306 54 1300 42'))
far.append(P('M1214 84v-8h16v8M1370 84v-8h16v8'))
# thin cloud bars
for x, y, w in [(520, 60, 150), (590, 72, 90), (1010, 60, 150), (1060, 72, 80), (1470, 70, 110), (90, 96, 120)]:
    far.append(P(f'M{x} {y}h{w}', ' opacity=".6"'))
svg('skyline-far', '\n'.join(far), 1.6)

# ---------- mid: the domed hall in the centre, a bathhouse on the right ----------
mid = []
d = 'M548 250V172h44v78M1008 250V172h44v78'                       # end pavilions
d += 'M544 172L570 126L596 172M1004 172L1030 126L1056 172M570 126V112M1030 126V112'
d += 'M592 200H1008M592 250V200M1008 250V200'                     # long front
d += 'M592 200L604 182H996L1008 200'                              # roof
mid.append(P(d))
arc = ''.join(f'M{x} 250v-17a5.5 5.5 0 0 1 11 0v17' for x in range(600, 1000, 19) if not 770 < x+5 < 830)
mid.append(P(arc))
win = ''.join(f'M{x} 224v-11l3.5-5l3.5 5v11' for x in range(602, 1000, 19) if not 750 < x+3 < 850)
mid.append(P(win, ' stroke-width="1.4"'))
spk = ''.join(f'M{x} 182l3-20l3 20' for x in list(range(612, 680, 22)) + list(range(716, 750, 22)) + list(range(856, 900, 22)) + list(range(926, 990, 22)))
mid.append(P(spk, ' stroke-width="1.4"'))
# flanking towers
for x in (690, 910):
    mid.append(P(f'M{x-11} 200V118h22V200M{x-14} 118h28M{x-11} 118L{x} 58L{x+11} 118M{x} 58V44M{x-5} 150v-14l5-6l5 6v14M{x-5} 186v-14l5-6l5 6v14'))
# drum, dome, lantern
d = 'M752 200V150h96v50M746 150h108M748 150l4-28l4 28M844 150l4-28l4 28'
d += 'M758 150C758 112 782 88 800 70C818 88 842 112 842 150'
d += 'M779 150C779 116 791 92 800 70M821 150C821 116 809 92 800 70M800 150V70'
d += 'M794 70V56h12v14M792 56h16M795 56L800 24L805 56M800 24V10M796 16h8'
mid.append(P(d))
mid.append(P(''.join(f'M{x} 192v-24l5-7l5 7v24' for x in (762, 779, 795, 812, 828)), ' stroke-width="1.4"'))
mid.append(P('M786 250v-26a14 14 0 0 1 28 0v26M780 250v-30l20-16l20 16v30'))       # portal
mid.append(P('M520 250H1080M530 256H1070'))                                          # quay
# bathhouse
d = 'M1250 250V196h100v54M1244 196h112M1256 196A44 44 0 0 1 1344 196M1293 152v-12h14v12M1300 140V126'
d += 'M1278 250v-26a22 22 0 0 1 44 0v26M1270 196Q1272 168 1300 152M1330 196Q1328 168 1300 152'
d += 'M1150 250V216h100M1350 216h100v34M1144 216h8M1448 216h8'
d += 'M1120 250V206h34v44M1446 250V206h34v44M1116 206h42M1442 206h42'
d += 'M1122 206A15 15 0 0 1 1152 206M1448 206A15 15 0 0 1 1478 206M1137 191V182M1463 191V182'
mid.append(P(d))
mid.append(P(''.join(f'M{x} 250v-16a6 6 0 0 1 12 0v16' for x in list(range(1162, 1240, 20)) + list(range(1360, 1440, 20)))))
mid.append(P('M1090 250H1510'))
svg('skyline-mid', '\n'.join(mid), 2)

# ---------- front: a chain bridge on the left, the river, lamps on the quay ----------
fr = []
def quad(p0, p1, p2, t):
    return tuple((1-t)**2*a + 2*t*(1-t)*b + t*t*c for a, b, c in zip(p0, p1, p2))
def y_at(p0, p1, p2, x):
    lo, hi = 0.0, 1.0
    for _ in range(40):
        m = (lo+hi)/2
        if quad(p0, p1, p2, m)[0] < x: lo = m
        else: hi = m
    return quad(p0, p1, p2, lo)[1]
T1, T2, top, deck = 170, 420, 150, 236
spans = [((-10, deck-2), (120, deck-4), (T1, top)), ((T1, top), ((T1+T2)/2, 2*224-top), (T2, top)), ((T2, top), (470, deck-4), (600, deck-2))]
for p0, p1, p2 in spans:
    for dy in (0, 7):
        fr.append(P(f'M{r(p0[0])} {r(p0[1]+dy)}Q{r(p1[0])} {r(p1[1]+dy)} {r(p2[0])} {r(p2[1]+dy)}'))
hang = ''
for p0, p1, p2 in spans:
    x = p0[0] + 12
    while x < p2[0] - 6:
        if abs(x-T1) > 16 and abs(x-T2) > 16 and 0 < x < 590:
            y = y_at(p0, p1, p2, x) + 7
            if deck - y > 3: hang += f'M{r(x)} {r(y)}V{deck}'
        x += 11
fr.append(P(hang, ' stroke-width="1.2"'))
fr.append(P(f'M-20 {deck}H600M-20 {deck+6}H600'))
for x in (T1, T2):
    fr.append(P(f'M{x-15} {deck}V{top-4}h30V{deck}M{x-19} {top-4}h38M{x-17} {top-11}h34M{x-15} {top-11}v7M{x+15} {top-11}v7'
                f'M{x-8} {deck}v-44a8 8 0 0 1 16 0v44M{x-15} {top+22}h30'
                f'M{x-17} {deck+6}V262M{x+17} {deck+6}V262M{x-23} 262h46l5 8h-56z'))
fr.append(P(''.join(f'M{x} {deck}v-10m-2.5 0h5' for x in range(40, 600, 62) if abs(x-T1) > 24 and abs(x-T2) > 24), ' stroke-width="1.2"'))
# quay lamps on the right
fr.append(P(''.join(f'M{x} 250v-18m-4 0h8m-4 0v-4' for x in range(1100, 1600, 58)), ' stroke-width="1.3"'))
# a river boat
fr.append(P('M676 268h84l-9 10h-66zM690 268v-9h50v9M700 259v-6h26v6M748 268v-16', ' stroke-width="1.6"'))
# water: short ripples, denser near the bank
random.seed(7)
w = ''
for row, y in enumerate((262, 272, 283, 294)):
    x = random.uniform(-10, 30)
    while x < 1600:
        L = random.uniform(14, 46) + row*6
        if not (640 < x < 770 and y < 282):
            w += f'M{r(x)} {y}q{r(L/4)} -2.4 {r(L/2)} 0t{r(L/2)} 0'
        x += L + random.uniform(18, 70) + row*10
fr.append(P(w, ' stroke-width="1.3" opacity=".8"'))
svg('skyline-front', '\n'.join(fr), 2)
