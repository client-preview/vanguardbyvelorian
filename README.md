# VANGUARD by VELORIAN

The VANGUARD storefront is built with Next.js, React, TypeScript, and Tailwind CSS. It includes the homepage, product catalogue, product detail pages, local cart, inquiry links, policy pages, and the local product-management interface.

## Requirements

- Node.js 22
- npm 10 or newer

## Local development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production verification

```bash
npm run lint
npm run build
```

The deployable static website is generated in `out/`.

The current storefront does not require environment variables. Product records and storefront images are included in the repository.

## Deploy from GitHub

GitHub Pages deployment is configured for the existing `preview/vanguardbyvelorian` repository.

1. Upload or push this project to the repository's `main` branch.
2. Open the repository's **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. The included workflow builds and publishes the website automatically. Future updates to `main` redeploy it.
5. Open the live website at [https://preview.github.io/vanguardbyvelorian/](https://preview.github.io/vanguardbyvelorian/).

Every push and pull request is also checked by the workflow in `.github/workflows/ci.yml`.

## Important data behavior

- The customer cart is stored in the visitor's browser.
- Product edits made in `/admin/products` are also browser-local in the current basic CMS implementation.
- Orders are completed through Messenger or email inquiry; there is no payment gateway.
