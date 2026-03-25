# Restaurant Kiosk UI

Self-ordering kiosk interface built with **React** (functional components), **Vite**, **Tailwind CSS**, and **React Router**. Touch-friendly layout inspired by quick-service POS flows.

## Features

- **Home** — Full-viewport-style layout with large category cards (Burgers, Drinks, Combos).
- **Menu** — `/menu/:category` grid with image, name, price, hover polish, and **Add to cart**.
- **Cart** — Quantity (+/−), remove line, **total**, **Checkout** (demo alert + clear cart).
- **Global cart** — `CartContext`: `items`, `total`, `addToCart`, `removeFromCart`, `updateQuantity`.

## Project structure

```
src/
├── components/     # FoodCard, CartItem, Header
├── context/        # CartContext (provider + useCart)
├── data/           # menuItems.js — categories and products
├── pages/          # Home, Menu, Cart
├── App.jsx
├── main.jsx
└── index.css       # Tailwind entry
```

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/menu` | Redirects to `/menu/burgers` |
| `/menu/:category` | Menu (`burgers` \| `drinks` \| `combos`) |
| `/cart` | Cart |
| `*` | Redirects to `/` |

## Scripts

```bash
npm install     # dependencies
npm run dev     # dev server (see vite.config.js for port / host)
npm run build   # production bundle → dist/
npm run preview # serve dist locally
npm run lint    # ESLint
```

## Deploy (Vercel)

Production demo: **https://restaurant-kiosk-ui.vercel.app**

Import the GitHub repo in the [Vercel dashboard](https://vercel.com/new) (Framework Preset: **Vite**). `vercel.json` adds a SPA fallback so routes like `/menu/burgers` work on refresh.

Or from this directory, after [`vercel login`](https://vercel.com/docs/cli): `npx vercel --prod`.

### Host inside your portfolio only (e.g. [sivaganesh1407.vercel.app](https://sivaganesh1407.vercel.app/))

Vercel’s **dashboard lists one row per project**. The separate project **restaurant-kiosk-ui** will never appear “inside” your portfolio project — they are two deployments. To have **only your portfolio project** on Vercel and still show the kiosk:

1. **Build this app for a subpath** (assets and router use `/restaurant-kiosk/`):
   ```bash
   npm run build:portfolio
   ```
   Or copy automatically into your portfolio repo (adjust the path):
   ```bash
   chmod +x scripts/build-for-portfolio.sh
   ./scripts/build-for-portfolio.sh /path/to/YOUR-PORTFOLIO-REPO/public/restaurant-kiosk
   ```
   (`public/` is for Vite/React; use `static/` for some other generators — same idea: web root subfolder.)

2. **In your portfolio repo**, merge these **rewrites** into its `vercel.json` (create the file if needed). Keep any rules you already have; add:
   ```json
   {
     "rewrites": [
       { "source": "/restaurant-kiosk", "destination": "/restaurant-kiosk/index.html" },
       { "source": "/restaurant-kiosk/", "destination": "/restaurant-kiosk/index.html" },
       { "source": "/restaurant-kiosk/:path*", "destination": "/restaurant-kiosk/index.html" }
     ]
   }
   ```
   If `vercel.json` already has `rewrites`, append these three objects to that array.

3. **Commit and push your portfolio repo** — Vercel redeploys **only** [sivaganesh1407.vercel.app](https://sivaganesh1407.vercel.app/). Open **https://sivaganesh1407.vercel.app/restaurant-kiosk/**

4. **Optional cleanup** — In [Vercel Dashboard](https://vercel.com/dashboard), remove the standalone **restaurant-kiosk-ui** project so your list matches “portfolio only.”

**Quick alternatives (still two projects on Vercel):** link or iframe from the portfolio to **https://restaurant-kiosk-ui.vercel.app** — no portfolio repo changes.

## Requirements

- Node.js 18+ recommended.

## Notes

- **npm registry:** `.npmrc` pins `registry=https://registry.npmjs.org/` so installs use the public registry only. Regenerate `package-lock.json` with `rm -rf node_modules package-lock.json && npm install` if it ever contains private URLs.
- Menu images use [Unsplash](https://unsplash.com) URLs in `src/data/menuItems.js`; replace with your own assets for production if you prefer.
- Checkout is a UI demo only (no payment or backend).
