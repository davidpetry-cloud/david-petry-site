"""Regenerate the redesign prototype pages from the live pages.

Each prototype is its live page plus the redesign layer, so content fixes
made in the live pages carry over. Links between the prototype pages are
rewritten to stay inside the prototype. Run from the repo root:

    python3 scripts/build-redesign.py
"""
import re
from pathlib import Path

root = Path(__file__).resolve().parent.parent

# live page -> prototype page
PAGES = {
    "index.html": "redesign.html",
    "music.html": "redesign-music.html",
    "drum-exercises.html": "redesign-drum-exercises.html",
}


def build(src_name: str, out_name: str) -> None:
    out = (root / src_name).read_text(encoding="utf-8")

    # Keep the prototype out of search results
    out = out.replace('<meta charset="UTF-8">', '<meta charset="UTF-8">\n<meta name="robots" content="noindex">', 1)
    # Bebas Neue and Syne aren't used by the redesign
    out = re.sub(r"&family=Bebas\+Neue", "", out, count=1)
    out = re.sub(r"&family=Syne:wght@[0-9;]+", "", out, count=1)
    # The redesign needs Outfit 700 and the italic serif on every page
    out = re.sub(r"family=Outfit:wght@([0-9;]+)",
                 lambda m: m.group(0) if "700" in m.group(1) else m.group(0) + ";700", out, count=1)
    out = re.sub(r"family=Cormorant\+Garamond:wght@[0-9;]+",
                 "family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600", out, count=1)
    # Browse between prototype pages, not back to the live ones
    out = re.sub(
        r'href="(index|music|drum-exercises)\.html',
        lambda m: f'href="{PAGES[m.group(1) + ".html"]}',
        out,
    )
    # The redesign layer loads after the inline styles so it wins at equal specificity
    out = out.replace("</head>", '<link rel="stylesheet" href="redesign.css">\n</head>', 1)
    out = out.replace("</body>", '<script src="redesign.js" defer></script>\n</body>', 1)

    assert out.count("redesign.css") == 1 and out.count("redesign.js") == 1, src_name
    assert "noindex" in out, src_name
    (root / out_name).write_text(out, encoding="utf-8")
    print(f"{out_name} rebuilt from {src_name}")


for src, dst in PAGES.items():
    build(src, dst)
