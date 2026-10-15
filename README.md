# david-petry.netlify.app

Personal site — AI implementation consulting, music education, and a
projects section covering shipped software.

## Structure

| File | Purpose |
|---|---|
| `index.html` | Main page — hero, about, services, **projects**, credentials, experience, prompt book, AI philosophy, lessons, contact |
| `music.html` | Music page |
| `drum-exercises.html` | Drum exercises |
| `suno-toolkit.html` | Interactive Suno prompt toolkit (a compiled bundle with its own styling) |
| `site.css` | Shared modern design layer for the three pages above the toolkit |
| `site.js` | Small enhancements: card spotlight, smooth theme switch |
| `og-card.jpg` | Open Graph preview image |
| `SUNO_prompt_book_David_Petry.pdf` | Free 68-page download |

Static HTML with no build step. Each page keeps its original CSS and JS
inline, then links `site.css` and `site.js` after them; the shared layer
wins where they overlap. Change the look in `site.css`, not in the inline
styles.

## Deploying

Connected to Netlify. Push to `main` and the site redeploys automatically.

Before this repo existed the site was deployed by dragging a folder into
Netlify Drop, which left no version history and no way to tell which local
copy was live. That is the problem this repo solves.

## Related projects

- [attestation-ledger](https://github.com/davidpetry-cloud/attestation-ledger) — provenance engine, published on npm
- [live-sound-eq-sop](https://github.com/davidpetry-cloud/live-sound-eq-sop) — FOH channel EQ reference
- [dj-mixing-sop](https://github.com/davidpetry-cloud/dj-mixing-sop) — DJ rig procedures
