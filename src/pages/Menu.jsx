import { useMemo } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import FoodCard from '../components/FoodCard';
import {
  categories,
  getItemsByCategory,
  isValidCategory,
} from '../data/menuItems';
import { useCart } from '../context/CartContext';

/**
 * Product grid for one category from the URL `/menu/:category`.
 */
export default function Menu() {
  const { category: categoryParam } = useParams();
  const { addToCart } = useCart();

  const valid = isValidCategory(categoryParam);

  const categoryMeta = useMemo(
    () => categories.find((c) => c.id === categoryParam),
    [categoryParam]
  );

  const items = useMemo(
    () => (valid ? getItemsByCategory(categoryParam) : []),
    [categoryParam, valid]
  );

  if (!valid) {
    return <Navigate to="/menu/burgers" replace />;
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            {categoryMeta?.title ?? 'Menu'}
          </h1>
          <p className="mt-2 text-slate-400">
            {categoryMeta?.description ?? 'Browse items and add to your cart.'}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <Link
              key={c.id}
              to={`/menu/${c.id}`}
              className={`inline-flex min-h-[48px] items-center rounded-xl px-4 py-3 text-base font-medium transition ${
                categoryParam === c.id
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'border border-slate-700 text-slate-300 hover:border-slate-600 hover:bg-slate-800'
              }`}
            >
              {c.title}
            </Link>
          ))}
        </div>
      </div>

      {items.length === 0 ? (
        <p className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 text-center text-lg text-slate-400">
          No items in this category.
        </p>
      ) : (
        <ul className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <li key={item.id}>
              <FoodCard item={item} onAddToCart={addToCart} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
