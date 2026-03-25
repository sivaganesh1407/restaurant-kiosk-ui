/**
 * Single cart line: thumbnail, pricing, +/- quantity (via updateQuantity), remove.
 */
export default function CartItem({ line, updateQuantity, removeFromCart }) {
  const lineTotal = line.price * line.quantity;

  return (
    <li className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-slate-700">
      <div className="h-24 w-28 shrink-0 overflow-hidden rounded-xl bg-slate-800">
        <img
          src={line.image}
          alt={line.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h3 className="truncate text-lg font-semibold text-white">
            {line.name}
          </h3>
          <p className="text-slate-400">${line.price.toFixed(2)} each</p>
          <p className="mt-1 text-xl font-bold text-amber-400">
            ${lineTotal.toFixed(2)}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/50 p-1">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() =>
                updateQuantity(line.id, line.quantity - 1)
              }
              className="flex h-12 w-12 items-center justify-center rounded-lg text-2xl font-medium text-white transition hover:bg-slate-800 active:scale-95"
            >
              −
            </button>
            <span className="min-w-[2rem] text-center text-xl font-semibold">
              {line.quantity}
            </span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() =>
                updateQuantity(line.id, line.quantity + 1)
              }
              className="flex h-12 w-12 items-center justify-center rounded-lg text-2xl font-medium text-white transition hover:bg-slate-800 active:scale-95"
            >
              +
            </button>
          </div>
          <button
            type="button"
            onClick={() => removeFromCart(line.id)}
            className="min-h-[48px] rounded-xl border border-red-500/50 px-4 text-sm font-semibold text-red-400 transition hover:bg-red-950/40"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
}
