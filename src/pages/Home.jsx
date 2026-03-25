import { useNavigate } from 'react-router-dom';
import { categories } from '../data/menuItems';

/**
 * Full-screen-style landing: large touch-friendly category cards → `/menu/:category`.
 */
export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[calc(100dvh-5.5rem)] flex-col justify-center px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 text-center lg:mb-14">
          <p className="text-sm font-medium uppercase tracking-widest text-amber-400">
            Self-order kiosk
          </p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            What would you like today?
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
            Tap a category to browse the menu — optimized for touchscreen ordering.
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                type="button"
                onClick={() => navigate(`/menu/${cat.id}`)}
                className={`group flex min-h-[min(28vh,220px)] w-full flex-col items-start justify-end rounded-3xl bg-gradient-to-br ${cat.accent} p-8 text-left shadow-xl shadow-black/40 transition duration-300 hover:scale-[1.02] hover:shadow-2xl hover:brightness-110 active:scale-[0.99] sm:min-h-[240px] lg:min-h-[280px]`}
              >
                <span className="text-3xl font-bold text-white drop-shadow-md sm:text-4xl">
                  {cat.title}
                </span>
                <span className="mt-2 text-lg text-white/90">{cat.description}</span>
                <span className="mt-5 text-sm font-semibold uppercase tracking-wide text-white/85 transition group-hover:translate-x-1">
                  Tap to open →
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
