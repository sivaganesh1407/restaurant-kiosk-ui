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

### Same hostname as your portfolio (e.g. sivaganesh1407.vercel.app)

Vercel assigns **one project per `*.vercel.app` hostname**. Your portfolio at [sivaganesh1407.vercel.app](https://sivaganesh1407.vercel.app/) and this kiosk **cannot both use that exact URL** as their primary deployment target.

**Practical options:**

1. **Link from your portfolio (simplest)** — In your portfolio’s **Projects** section, set the live / “View” link for this work to **https://restaurant-kiosk-ui.vercel.app** (or add a “Live demo” button). Visitors stay on your brand; the demo opens in the same tab or a new tab.

2. **Embed full screen in a portfolio page** — Add an `<iframe>` whose `src` is `https://restaurant-kiosk-ui.vercel.app` (set width/height and `style="border:0;min-height:80vh"` as needed). The URL bar still shows your portfolio path.

3. **Serve under a path on the portfolio project** — In the **portfolio** repo, copy this app’s `dist/` output into something like `public/restaurant-kiosk/` and deploy that project. Build this app with a subpath:
   ```bash
   VITE_BASE_PATH=/restaurant-kiosk/ npm run build
   ```
   Then deploy the portfolio so `yoursite.vercel.app/restaurant-kiosk/` serves those files (and add a SPA fallback for that folder in the **portfolio** project’s `vercel.json`).

4. **Custom subdomain** — In Vercel **Domains**, add something like `kiosk.yourdomain.com` to **this** project if you use your own domain on the portfolio.

## Requirements

- Node.js 18+ recommended.

## Notes

- **npm registry:** `.npmrc` pins `registry=https://registry.npmjs.org/` so installs use the public registry only. Regenerate `package-lock.json` with `rm -rf node_modules package-lock.json && npm install` if it ever contains private URLs.
- Menu images use [Unsplash](https://unsplash.com) URLs in `src/data/menuItems.js`; replace with your own assets for production if you prefer.
- Checkout is a UI demo only (no payment or backend).
