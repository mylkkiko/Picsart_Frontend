import type { Product } from "../../../helpers/types";

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-900/70 shadow-lg shadow-emerald-950/40 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-pink-400/40 hover:shadow-xl hover:shadow-pink-950/40">
      <div className="flex h-52 w-full items-center justify-center overflow-hidden bg-slate-800/50 p-6">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold leading-snug text-slate-100">
          {product.name}
        </h3>

        <p className="mt-2 text-2xl font-bold tracking-tight text-emerald-300">
          ${product.price.toLocaleString("en-US")}
        </p>

        <div className="mt-auto pt-5">
          <button
            onClick={() => onAddToCart(product)}
            className="w-full rounded-xl bg-emerald-500 px-4 py-2.5 font-medium text-slate-950 shadow-md shadow-emerald-900/50 transition hover:bg-pink-400 hover:shadow-pink-900/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
