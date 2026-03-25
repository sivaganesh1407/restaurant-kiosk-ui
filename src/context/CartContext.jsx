import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

/**
 * Global cart for the kiosk (Context API).
 * Exposes items, derived total, and addToCart / removeFromCart / updateQuantity.
 */
const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  /** Add one unit of a menu product (merges quantity if the same id already exists). */
  const addToCart = useCallback((product) => {
    setItems((prev) => {
      const existing = prev.find((line) => line.id === product.id);
      if (existing) {
        return prev.map((line) =>
          line.id === product.id
            ? { ...line, quantity: line.quantity + 1 }
            : line
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        },
      ];
    });
  }, []);

  /** Remove a line item completely by product id. */
  const removeFromCart = useCallback((id) => {
    setItems((prev) => prev.filter((line) => line.id !== id));
  }, []);

  /**
   * Set absolute quantity for a line. Quantity <= 0 removes the line.
   * Used by +/- controls on the cart screen.
   */
  const updateQuantity = useCallback((id, quantity) => {
    setItems((prev) => {
      if (quantity <= 0) {
        return prev.filter((line) => line.id !== id);
      }
      return prev.map((line) =>
        line.id === id ? { ...line, quantity } : line
      );
    });
  }, []);

  /** Clears the cart after a successful checkout (not required on every kiosk, but useful here). */
  const clearCart = useCallback(() => setItems([]), []);

  /** Running order total: sum of price × quantity for all lines. */
  const total = useMemo(
    () => items.reduce((sum, line) => sum + line.price * line.quantity, 0),
    [items]
  );

  const itemCount = useMemo(
    () => items.reduce((n, line) => n + line.quantity, 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      total,
      itemCount,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    }),
    [
      items,
      total,
      itemCount,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    ]
  );

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within CartProvider');
  }
  return ctx;
}
