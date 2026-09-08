import { useState } from "react";
import type { BasketItem, Product } from "../helpers/types";
import ProductList from "../components/Shop/ProducList/ProductList";
import Basket from "../components/Shop/Basket/Basket";

export const OnlineShop = () => {
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
    <div className="mx-auto flex max-w-7xl flex-col gap-12 py-10 sm:py-14">
      <header className="flex flex-col gap-6 border-b border-emerald-500/20 pb-8 sm:flex-row sm:items-end sm:justify-between">
        <h1 className="bg-gradient-to-r from-emerald-400 to-pink-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
          Online shop
        </h1>

        <nav className="inline-flex gap-1 self-start rounded-xl border border-emerald-500/20 bg-slate-900/70 p-1 shadow-sm shadow-emerald-950/50 backdrop-blur-sm sm:self-auto">
          <button
            onClick={() => setView("products")}
            className={`rounded-lg px-5 py-2 font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 ${
              view === "products"
                ? "bg-emerald-500 text-slate-950 shadow-sm shadow-emerald-900/50"
                : "text-slate-400 hover:bg-slate-800 hover:text-emerald-300"
            }`}
          >
            Shop
          </button>
          <button
            onClick={() => setView("basket")}
            className={`flex items-center gap-2 rounded-lg px-5 py-2 font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 ${
              view === "basket"
                ? "bg-pink-500 text-slate-950 shadow-sm shadow-pink-900/50"
                : "text-slate-400 hover:bg-slate-800 hover:text-pink-300"
            }`}
          >
            Basket
            {basketCount > 0 && (
              <span
                className={`inline-flex min-w-5 justify-center rounded-full px-1.5 py-0.5 text-xs font-semibold tabular-nums ${
                  view === "basket" ? "bg-slate-950/30 text-slate-950" : "bg-pink-500/20 text-pink-300"
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
          <h2 className="mb-6 text-xl font-semibold tracking-tight text-emerald-300">
            Products
          </h2>
          <ProductList
            onAddToCart={handleAddToCart}
          />
        </section>
      ) : (
        <section>
          <h2 className="mb-6 text-xl font-semibold tracking-tight text-pink-300">
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
  )
}
