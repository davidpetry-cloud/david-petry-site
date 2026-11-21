# Instructions for working on david-petry.netlify.app

- New pages use the design tokens in `site.css` and add no inline styles:
  no `<style>` blocks and no `style=""` attributes. Change the look in
  `site.css`.
- The practice metronome is Dart in `metronome/`, compiled to `metronome.js`
  with `sh metronome/build.sh`; don't edit `metronome.js` by hand.
- Licensing (see `LICENSE`): the code is PolyForm Noncommercial 1.0.0 with a
  `Required Notice` line to keep intact; the content (writing, PDFs, prompt
  book, Suno toolkit, art, photos, music) is all rights reserved. Record any
  new third-party code or assets in `THIRD-PARTY-NOTICES.md`.

## Security by default

For all code: apply least privilege and defense in depth. Never commit
secrets or personal data. Access to devices (microphone, camera, location,
Bluetooth, USB, IoT) only after a real user action, with clear on-screen
state, automatic shutoff, no network exfiltration, and refusal inside other
sites' frames. Use strict security policies (CSP, no third-party scripts
unless needed and pinned). Test like an attacker before shipping, document
protections in a `SECURITY.md`, and keep dependencies patched (Dependabot).
Obscurity is never the protection.

Before merging any new screen, run the accessibility-review and
security-review skills and fix what they find.

In this repo that means:
- The three hand-written pages run under a strict policy in `netlify.toml`:
  `script-src 'self'`, `style-src 'self'`, `connect-src 'none'`. Put page
  scripts in `js/` files and wire events with `addEventListener`: never
  inline `<script>` blocks, `onclick=` attributes or `style=""`.
- `suno-toolkit.html` is a self-unpacking bundle with its own policy. Its
  one inline loader is pinned by SHA-256 hash in `netlify.toml`. If the
  toolkit is re-exported or its loader edited, recompute that hash, keep the
  loader setting `window.__resources` directly (not via an injected inline
  script), and re-test that it renders with no CSP violations.
- See `SECURITY.md`.

## Hosting budget

- Netlify is on the Free plan: each production deploy (every merge to
  `main`) costs 15 of 300 monthly credits, and bandwidth costs credits too.
  Deploy previews for pull requests are free. Batch site changes into as
  few merges to `main` as possible.
- Host new standalone apps outside this site, on Cloudflare Pages (free),
  in their own repository: for example the Lydian Chromatic Explorer
  (`davidpetry-cloud/Lydian-Chromatic-Explorer-`). Link to them from here
  in a regular site update.

## Music theory content

- Cite a source for every music-theory claim, and where sources disagree,
  say so rather than guessing.
