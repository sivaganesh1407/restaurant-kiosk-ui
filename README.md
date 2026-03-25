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

Import the GitHub repo in the [Vercel dashboard](https://vercel.com/new) (Framework Preset: **Vite**). `vercel.json` adds a SPA fallback so routes like `/menu/burgers` work on refresh. Attach your portfolio domain under **Project → Settings → Domains**.

Or from this directory, after [`vercel login`](https://vercel.com/docs/cli): `npx vercel --prod`.

## Requirements

- Node.js 18+ recommended.

## Notes

- **npm registry:** `.npmrc` pins `registry=https://registry.npmjs.org/` so installs use the public registry only. Regenerate `package-lock.json` with `rm -rf node_modules package-lock.json && npm install` if it ever contains private URLs.
- Menu images use [Unsplash](https://unsplash.com) URLs in `src/data/menuItems.js`; replace with your own assets for production if you prefer.
- Checkout is a UI demo only (no payment or backend).
