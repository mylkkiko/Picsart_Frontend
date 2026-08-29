import type { BasketItem } from "../../helpers/types";

type BasketProps = {
    items: BasketItem[],
    onQuantityUp: (id: number) => void;
    onQuantityDown: (id: number) => void;
    onDelete: (id:number) => void;
}

export default function Basket({ items, onQuantityUp, onQuantityDown, onDelete }: BasketProps) {

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                    <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                        <tr>
                            <th className="px-5 py-4 font-semibold">Product</th>
                            <th className="px-5 py-4 text-right font-semibold">Price</th>
                            <th className="px-5 py-4 text-center font-semibold">Quantity</th>
                            <th className="px-5 py-4 text-right font-semibold">Subtotal</th>
                            <th className="px-5 py-4 text-center font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {
                            items.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-5 py-16 text-center text-slate-500">
                                        Basket is empty
                                    </td>
                                </tr>
                            ) : (
                                items.map(item =>
                                    <tr key={item.id} className="transition hover:bg-slate-50">
                                        <td className="px-5 py-4 font-medium text-slate-900">{item.name}</td>
                                        <td className="px-5 py-4 text-right tabular-nums text-slate-600">
                                            ${item.price.toLocaleString("en-US")}
                                        </td>
                                        <td className="px-5 py-4 text-center">
                                            <span className="inline-flex min-w-9 justify-center rounded-lg bg-slate-100 px-2.5 py-1 font-semibold tabular-nums text-slate-700">
                                                {item.quantity}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 text-right font-semibold tabular-nums text-slate-900">
                                            ${(item.price * item.quantity).toLocaleString("en-US")}
                                        </td>
                                        <td className="px-5 py-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <button
                                                    aria-label="Remove item"
                                                    onClick={() => onDelete(item.id)}
                                                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-sm leading-none text-slate-500 transition hover:border-red-500 hover:bg-red-50 hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 active:scale-95"
                                                >
                                                    ✕
                                                </button>
                                                <button
                                                    aria-label="Increase quantity"
                                                    onClick={() => onQuantityUp(item.id)}
                                                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-lg leading-none text-slate-700 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 active:scale-95"
                                                >
                                                    +
                                                </button>
                                                <button
                                                    aria-label="Decrease quantity"
                                                    onClick={() => onQuantityDown(item.id)}
                                                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-lg leading-none text-slate-700 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 active:scale-95"
                                                >
                                                    −
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                    {items.length > 0 && (
                        <tfoot className="border-t border-slate-200 bg-slate-50">
                            <tr>
                                <td colSpan={3} className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    Total
                                </td>
                                <td className="px-5 py-4 text-right text-lg font-bold tabular-nums text-slate-900">
                                    ${total.toLocaleString("en-US")}
                                </td>
                                <td />
                            </tr>
                        </tfoot>
                    )}
                </table>
            </div>
        </div>
    )
}
