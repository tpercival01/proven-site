# PROVEN website

Dependency-free static website for PROVEN.

## Configure before deployment

Edit `config.js`:

- `siteUrl`: replace `https://example.com` with the production origin, with no trailing slash.
- `supportEmail`: replace `SUPPORT_EMAIL` with the real support email address.

`siteUrl` is the single site URL constant used by the canonical and Open Graph URL tags at runtime.

## Assets

The project intentionally does not invent PROVEN artwork.

When production assets are supplied, add their files under `assets/` and then add the appropriate favicon, Apple touch icon and Open Graph image tags to the document heads. No placeholder brand artwork is included.

A dormant screenshot-ready area is included in `index.html`. Unhide it only after replacing the placeholder with one or two real PROVEN screenshots.

## Routes

- `/`
- `/privacy`
- `/support`

Both top-level HTML files and folder `index.html` versions are included for compatibility with different static hosts.

## Deploy

Upload this directory as-is to Cloudflare Pages, Netlify, Vercel static hosting, or GitHub Pages.

No build step, backend, cookies, analytics, tracking scripts, or framework runtime are required.
