/**
 * Menu product card: image, name, price, Add to Cart — with hover / motion for a polished kiosk feel.
 */
export default function FoodCard({ item, onAddToCart }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-lg shadow-black/25 backdrop-blur transition duration-300 ease-out hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-900/10">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-800">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="text-xl font-semibold text-white transition group-hover:text-amber-50">
            {item.name}
          </h3>
          {item.description ? (
            <p className="mt-1 text-sm text-slate-400">{item.description}</p>
          ) : null}
        </div>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
          <span className="text-2xl font-bold text-amber-400">
            ${item.price.toFixed(2)}
          </span>
          <button
            type="button"
            onClick={() => onAddToCart(item)}
            className="min-h-[52px] min-w-[160px] rounded-xl bg-amber-500 px-6 text-lg font-semibold text-slate-950 shadow-md transition duration-200 hover:bg-amber-400 hover:shadow-lg active:scale-[0.98]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
