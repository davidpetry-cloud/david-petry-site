# Security

## What protects this site

Every page is served with a strict Content-Security-Policy (set in
`netlify.toml`) plus `X-Frame-Options`, `X-Content-Type-Options`,
`Referrer-Policy`, `Cross-Origin-Opener-Policy` and a `Permissions-Policy`
that switches off the camera, microphone, location, payment and USB for
every page.

| Page | Policy | What it means |
|---|---|---|
| Home, Music, Exercises | `script-src 'self'`, `style-src 'self'`, `connect-src 'none'` | Only this site's own script and style files run; no inline scripts, `onclick=` attributes or inline styles; and the pages can't send data anywhere. |
| Suno Prompt Toolkit | `default-src 'none'`; scripts: one inline loader pinned by SHA-256 hash, plus the `blob:` files it unpacks | Nothing is loaded from other sites: React, the runtime and the fonts are packed inside the page. The runtime needs `'unsafe-eval'` and inline styles, so its policy is necessarily looser than the other pages', but no outside or injected script can run. |

Tested by injecting inline scripts, outside scripts and `onerror=`
handlers, and by trying to send data out: all blocked on every page.

The site uses no cookies, accounts, analytics or trackers, and collects no
personal data.

## Reporting a vulnerability

Please report security problems privately, not in a public issue:

- Use **"Report a vulnerability"** under this repository's **Security** tab
  (if private vulnerability reporting is enabled), or
- contact David Petry through https://david-petry.netlify.app/.
