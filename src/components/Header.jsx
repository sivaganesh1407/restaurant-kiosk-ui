import { Link, NavLink, useLocation } from 'react-router-dom';
import { CATEGORY_IDS } from '../data/menuItems';
import { useCart } from '../context/CartContext';

const linkClass =
  'rounded-xl px-5 py-3 text-lg font-medium transition min-h-[48px] inline-flex items-center';

/**
 * Top header / navbar: brand, Home, Menu (default category), Cart with badge.
 */
export default function Header() {
  const { itemCount } = useCart();
  const { pathname } = useLocation();
  const menuActive = pathname.startsWith('/menu');

  return (
    <header className="sticky top-0 z-10 shrink-0 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-white"
        >
          Quick<span className="text-amber-400">Bite</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkClass} ${
                isActive
                  ? 'bg-amber-500 text-slate-950'
                  : 'text-slate-300 hover:bg-slate-800'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={`/menu/${CATEGORY_IDS.BURGERS}`}
            className={() =>
              `${linkClass} ${
                menuActive
                  ? 'bg-amber-500 text-slate-950'
                  : 'text-slate-300 hover:bg-slate-800'
              }`
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `${linkClass} relative ${
                isActive
                  ? 'bg-amber-500 text-slate-950'
                  : 'text-slate-300 hover:bg-slate-800'
              }`
            }
          >
            Cart
            {itemCount > 0 ? (
              <span className="ml-2 inline-flex min-h-[28px] min-w-[28px] items-center justify-center rounded-full bg-slate-950 px-2 text-sm font-bold text-amber-400">
                {itemCount}
              </span>
            ) : null}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
