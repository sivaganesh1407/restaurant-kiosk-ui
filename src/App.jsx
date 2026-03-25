import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Menu from './pages/Menu';

/** React Router basename matches Vite `base` when the app is served from a subpath. */
function routerBasename() {
  const b = import.meta.env.BASE_URL.replace(/\/$/, '');
  return b === '' ? undefined : b;
}

/**
 * App shell: CartProvider, router, shared header, kiosk routes.
 */
export default function App() {
  return (
    <CartProvider>
      <BrowserRouter basename={routerBasename()}>
        <div className="flex min-h-dvh flex-col bg-slate-950">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/menu"
                element={<Navigate to="/menu/burgers" replace />}
              />
              <Route path="/menu/:category" element={<Menu />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
