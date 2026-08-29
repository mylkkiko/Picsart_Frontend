import type { Product } from "../../helpers/types";

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">
      <div className="flex h-52 w-full items-center justify-center overflow-hidden bg-slate-50 p-6">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold leading-snug text-slate-900">
          {product.name}
        </h3>

        <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
          ${product.price.toLocaleString("en-US")}
        </p>

        <div className="mt-auto pt-5">
          <button
            onClick={() => onAddToCart(product)}
            className="w-full rounded-xl bg-blue-600 px-4 py-2.5 font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 active:bg-blue-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
