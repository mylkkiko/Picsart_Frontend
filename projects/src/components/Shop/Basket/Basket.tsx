import type { BasketItem } from "../../../helpers/types";

type BasketProps = {
    items: BasketItem[],
    onQuantityUp: (id: number) => void,
    onQuantityDown: (id: number) => void,
    onDelete: (id:number) => void,
}

export default function Basket({ items, onQuantityUp, onQuantityDown, onDelete }: BasketProps) {

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-900/70 shadow-lg shadow-emerald-950/40 backdrop-blur-sm">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                    <thead className="bg-slate-800/60 text-xs uppercase tracking-wider text-emerald-300/70">
                        <tr>
                            <th className="px-5 py-4 font-semibold">Product</th>
                            <th className="px-5 py-4 text-right font-semibold">Price</th>
                            <th className="px-5 py-4 text-center font-semibold">Quantity</th>
                            <th className="px-5 py-4 text-right font-semibold">Subtotal</th>
                            <th className="px-5 py-4 text-center font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                        {
                            items.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-5 py-16 text-center text-slate-400">
                                        Basket is empty
                                    </td>
                                </tr>
                            ) : (
                                items.map(item =>
                                    <tr key={item.id} className="transition hover:bg-slate-800/50">
                                        <td className="px-5 py-4 font-medium text-slate-100">{item.name}</td>
                                        <td className="px-5 py-4 text-right tabular-nums text-slate-400">
                                            ${item.price.toLocaleString("en-US")}
                                        </td>
                                        <td className="px-5 py-4 text-center">
                                            <span className="inline-flex min-w-9 justify-center rounded-lg bg-slate-800 px-2.5 py-1 font-semibold tabular-nums text-emerald-300">
                                                {item.quantity}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 text-right font-semibold tabular-nums text-pink-300">
                                            ${(item.price * item.quantity).toLocaleString("en-US")}
                                        </td>
                                        <td className="px-5 py-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <button
                                                    aria-label="Remove item"
                                                    onClick={() => onDelete(item.id)}
                                                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/60 text-sm leading-none text-slate-400 transition hover:border-pink-400 hover:bg-pink-500/10 hover:text-pink-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 active:scale-95"
                                                >
                                                    ✕
                                                </button>
                                                <button
                                                    aria-label="Increase quantity"
                                                    onClick={() => onQuantityUp(item.id)}
                                                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/60 text-lg leading-none text-slate-200 transition hover:border-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 active:scale-95"
                                                >
                                                    +
                                                </button>
                                                <button
                                                    aria-label="Decrease quantity"
                                                    onClick={() => onQuantityDown(item.id)}
                                                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/60 text-lg leading-none text-slate-200 transition hover:border-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 active:scale-95"
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
                        <tfoot className="border-t border-emerald-500/20 bg-slate-800/60">
                            <tr>
                                <td colSpan={3} className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-emerald-300/70">
                                    Total
                                </td>
                                <td className="px-5 py-4 text-right text-lg font-bold tabular-nums text-pink-300">
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
