# david-petry.netlify.app

Personal site — AI implementation consulting, music education, and a
projects section covering shipped software.

## Structure

| File | Purpose |
|---|---|
| `index.html` | Main page — hero, about, services, **projects**, credentials, experience, prompt book, AI philosophy, lessons, contact |
| `music.html` | Music page |
| `drum-exercises.html` | Drum exercises, the practice metronome, and a link to [Drum Studio](https://davidpetry-cloud.github.io/drum-studio/) (the full metronome and tuning app; its own repo, `davidpetry-cloud/drum-studio`, on GitHub Pages) |
| `suno-toolkit.html` | Interactive Suno prompt toolkit (a compiled bundle with its own styling) |
| `site.css` | The one stylesheet for the three pages above the toolkit: design tokens, shared components, then each page's sections |
| `site.js` | Small enhancements: card spotlight, smooth theme switch |
| `metronome.js` | Practice metronome on the exercises page, **compiled from Dart**; don't edit by hand |
| `metronome/` | The metronome's Dart source, checks and build script |
| `og-card.jpg` | Open Graph preview image |
| `SUNO_prompt_book_David_Petry.pdf` | Free 68-page download |

Static HTML with no build step. All styling lives in `site.css`; the pages
carry no `<style>` blocks and no `style=""` attributes, so change the look
there. Colours, type sizes, radii and the like are tokens at the top of the
file, with one block for the dark theme and one for the light theme. Each
page's `<html>` has a class (`page-home`, `page-music`, `page-exercises`)
for the few base rules that apply to some pages only. Each page keeps its
own small scripts inline and loads `site.js` after them.

## The Dart metronome

The metronome on `drum-exercises.html` is written in Dart (`metronome/web/main.dart`,
with the tempo arithmetic in `metronome/lib/timing.dart`) and compiled to plain
JavaScript. The compiled `metronome.js` is committed, so Netlify still deploys with
no build step and the page's security policy needs no change. After editing the
Dart, rebuild (needs the Dart SDK: `brew install dart`):

```sh
sh metronome/build.sh
```

That analyses the code, runs the checks, and writes `metronome.js`. The panel stays
hidden if the script doesn't load or the browser can't play sound.

## Deploying

Connected to Netlify. Push to `main` and the site redeploys automatically.

Before this repo existed the site was deployed by dragging a folder into
Netlify Drop, which left no version history and no way to tell which local
copy was live. That is the problem this repo solves.

## Related projects

- [grade6-singapore-math-cpa](https://github.com/davidpetry-cloud/grade6-singapore-math-cpa) — Grade 6 Singapore Math curriculum, 149 days ([live](https://davidpetry-cloud.github.io/grade6-singapore-math-cpa/singapore-math-6-hub.html))
- [ai-literacy-module](https://github.com/davidpetry-cloud/ai-literacy-module) — Human-Centered AI Literacy course ([live](https://davidpetry-cloud.github.io/ai-literacy-module/))
- [attestation-ledger](https://github.com/davidpetry-cloud/attestation-ledger) — provenance engine, published on npm
- [live-sound-eq-sop](https://github.com/davidpetry-cloud/live-sound-eq-sop) — FOH channel EQ reference
- [dj-mixing-sop](https://github.com/davidpetry-cloud/dj-mixing-sop) — DJ rig procedures

## License

© 2026 David Petry. Built with the help of AI tools (including Claude Code).

- **Code** (HTML structure, `site.css`, `site.js`, the metronome,
  `art/build-score.py`, `netlify.toml`): open for **noncommercial** use and
  collaboration under the
  [PolyForm Noncommercial License 1.0.0](LICENSES/PolyForm-Noncommercial-1.0.0.txt).
  Keep the `Required Notice` line from [`LICENSE`](LICENSE) and credit David Petry.
- **Content** (the writing, exercise PDFs, prompt book, Suno toolkit, artwork,
  photos and music): **all rights reserved**. The free PDFs may be downloaded
  for your own practice.
- Commercial use needs permission. Third-party fonts and code keep their own
  licences, listed in [`THIRD-PARTY-NOTICES.md`](THIRD-PARTY-NOTICES.md).
