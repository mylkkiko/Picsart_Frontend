import type { Product } from "../../helpers/types";
import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

type ProductListProps = {
    onAddToCart: (product: Product) => void;
}

export default function ProductList({ onAddToCart }: ProductListProps) {
    const [products] = useState<Product[]>([
        {
            id: 1,
            name: 'MacBook Air 13" M2',
            price: 999,
            image: "https://www.zigzag.am/media/catalog/product/cache/811d9bdbaebf1cf745388b9849057259/4/2/4267473.jpg"
        },
        {
            id: 2,
            name: 'MacBook Air 15" M3',
            price: 1299,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGceDqM1KJ8v2bpm2tdhqMUF839tL906MUYIPORPufiA&s"
        },
        {
            id: 3,
            name: 'MacBook Pro 14" M3',
            price: 1599,
            image: "https://lifenet.am/cdn/shop/files/1_f96fca35-dfde-4fb0-8104-f7efb1a7af38.jpg?v=1713342759&width=2048"
        },
        {
            id: 4,
            name: 'MacBook Pro 16" M3 Max',
            price: 3499,
            image: "https://ipmobile.am/wp-content/uploads/2024/01/macbook_pro_16_m3_space_black_2.png"
        },
    ]);


    return (
        <>
            {products.length === 0 ? (
                <p className="rounded-2xl border border-dashed border-slate-300 bg-white/60 p-16 text-center text-slate-500">
                    Товары закончились
                </p>
            ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={onAddToCart}
                        />
                    ))}
                </div>
            )}
        </>
    );
}
