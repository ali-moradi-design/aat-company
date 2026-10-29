# AAT|Architecten (demo recreation)

A recreation of a Belgian architecture studio's site with scroll choreography,
built with Next.js 16 and Feature-Sliced Design, for a developer portfolio.
It is **not affiliated with AAT|Architecten**: contact details are
placeholders, the contact form sends nothing, every page says so in a fixed
note, and the site asks search engines not to index it (`robots.txt`,
`X-Robots-Tag`, robots meta).

Live: https://aat-company.ali-moradi-develop.com

## Commands

Node 24, pnpm 12.

```sh
pnpm install
pnpm dev          # http://localhost:3005
pnpm check        # typecheck, lint, format
pnpm build        # standalone server in .next/standalone
pnpm start        # runs the standalone server on port 3005
pnpm test:e2e     # Playwright against next dev
E2E_SERVER=prod pnpm test:e2e   # against the built server, as CI does
```

`PW_CHROMIUM_PATH` points Playwright at an installed Chromium;
`PLAYWRIGHT_CHANNEL=bundled` uses the one from `pnpm exec playwright install`.

## Deploy

- `next.config.ts`: `output: "standalone"`; `scripts/standalone.mjs` copies
  `public/` and `.next/static` into it. Headers (HSTS, nosniff, noindex) are
  set there.
- `Dockerfile`: only the standalone folder, runs as `node`, healthcheck on
  `/robots.txt`.
- `.github/workflows/docker.yml`: after CI passed on `main`, builds
  `ghcr.io/ali-moradi-design/aat-company-web:<sha>`; deploy-kit then makes the
  server pull it and restart.
- `deploy/compose.yaml`: `127.0.0.1:3114`, read-only with a tmpfs for the
  `next/image` cache, 384 MB (resizing the photos with sharp peaks near 280 MB).
- `deploy/nginx.conf`: the host's site file (GET/HEAD only; certbot adds TLS).
