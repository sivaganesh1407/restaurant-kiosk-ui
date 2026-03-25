import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';

/**
 * Cart review: list lines, quantity updates, total, checkout (clears cart + confirmation).
 */
export default function Cart() {
  const { items, updateQuantity, removeFromCart, total, clearCart } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;
    const paid = total;
    clearCart();
    // Replace with POS / payment integration in production.
    window.alert(
      `Thank you! Total $${paid.toFixed(2)} — your order has been sent to the kitchen.`
    );
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Your cart</h1>
      <p className="mt-2 text-slate-400">
        Adjust quantities or remove items before checkout.
      </p>

      {items.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/50 p-10 text-center">
          <p className="text-lg text-slate-300">Your cart is empty.</p>
          <Link
            to="/"
            className="mt-6 inline-flex min-h-[52px] items-center justify-center rounded-xl bg-amber-500 px-8 text-lg font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            Start ordering
          </Link>
        </div>
      ) : (
        <>
          <ul className="mt-8 flex flex-col gap-4">
            {items.map((line) => (
              <CartItem
                key={line.id}
                line={line}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-black/20">
            <div className="flex items-center justify-between gap-4 text-2xl font-bold text-white">
              <span>Total</span>
              <span className="text-amber-400">${total.toFixed(2)}</span>
            </div>
            <button
              type="button"
              onClick={handleCheckout}
              className="mt-6 w-full min-h-[56px] rounded-xl bg-emerald-500 text-lg font-semibold text-slate-950 shadow-lg transition duration-200 hover:bg-emerald-400 hover:shadow-xl active:scale-[0.99]"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
