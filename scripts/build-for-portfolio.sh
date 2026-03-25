#!/usr/bin/env bash
# Build the kiosk for hosting under your portfolio domain, e.g.
#   https://sivaganesh1407.vercel.app/restaurant-kiosk/
#
# Usage:
#   chmod +x scripts/build-for-portfolio.sh
#   ./scripts/build-for-portfolio.sh /path/to/your-portfolio/public/restaurant-kiosk
#
# Then commit & push your portfolio repo so Vercel redeploys ONE project only.

set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

export VITE_BASE_PATH=/restaurant-kiosk/
npm run build

TARGET="${1:-}"
if [[ -n "$TARGET" ]]; then
  mkdir -p "$TARGET"
  rm -rf "${TARGET:?}/"*
  cp -R dist/. "$TARGET/"
  echo ""
  echo "✓ Kiosk static files copied to: $TARGET"
  echo "  Next: add SPA rewrites to your portfolio's vercel.json (see README), then commit & push."
else
  echo ""
  echo "✓ Built with base /restaurant-kiosk/ → dist/"
  echo "  Copy dist/* into your portfolio's public/restaurant-kiosk/ or run:"
  echo "  $0 /path/to/portfolio/public/restaurant-kiosk"
fi
