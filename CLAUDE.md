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

Known gaps to close in this repo (tracked here until fixed):
- The pages' Content-Security-Policy (in `netlify.toml`) still allows
  `'unsafe-inline'` scripts and styles because the pages use inline
  `<script>` blocks. Move those into files, then drop `'unsafe-inline'`.
- `suno-toolkit.html` loads React from unpkg.com without Subresource
  Integrity and has no CSP. Self-host React (or add SRI) and give the page
  a policy.
- `connect-src 'self'` could be `'none'` if no page needs to fetch.
