import { useState } from 'react'
import './App.css'
import Basket from './components/Basket/Basket'
import ProductList from './components/ProducList/ProductList'
import type { BasketItem, Product } from './helpers/types';

function App() {
  const [view, setView] = useState<"products" | "basket">("products");
  const [basket, setBasket] = useState<BasketItem[]>([]);

  function handleQuantityUp(id: number): void {
    setBasket(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  }

  function handleQuantityDown(id: number): void {
    setBasket(prev => prev
      .map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
      .filter(item => item.quantity > 0)
    );
  }

  function handleDelete(id: number): void {
    setBasket(prev => prev.filter(item =>
      item.id !== id
    ));
  }

  function handleAddToCart(product: Product): void {
    setBasket(prev => {
      const existing = prev.find(item => item.id === product.id);

      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  }

  const basketCount = basket.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <header className="flex flex-col gap-6 border-b border-slate-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Online shop
          </h1>

          <nav className="inline-flex gap-1 self-start rounded-xl border border-slate-200 bg-white p-1 shadow-sm sm:self-auto">
            <button
              onClick={() => setView("products")}
              className={`rounded-lg px-5 py-2 font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                view === "products"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              Shop
            </button>
            <button
              onClick={() => setView("basket")}
              className={`flex items-center gap-2 rounded-lg px-5 py-2 font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                view === "basket"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              Basket
              {basketCount > 0 && (
                <span
                  className={`inline-flex min-w-5 justify-center rounded-full px-1.5 py-0.5 text-xs font-semibold tabular-nums ${
                    view === "basket" ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"
                  }`}
                >
                  {basketCount}
                </span>
              )}
            </button>
          </nav>
        </header>

        {view === "products" ? (
          <section>
            <h2 className="mb-6 text-xl font-semibold tracking-tight text-slate-900">
              Products
            </h2>
            <ProductList
              onAddToCart={handleAddToCart}
            />
          </section>
        ) : (
          <section>
            <h2 className="mb-6 text-xl font-semibold tracking-tight text-slate-900">
              Basket
            </h2>
            <Basket
              items={basket}
              onQuantityUp={handleQuantityUp}
              onQuantityDown={handleQuantityDown}
              onDelete={handleDelete}
            />
          </section>
        )}
      </div>
    </div>
  )
}

export default App
