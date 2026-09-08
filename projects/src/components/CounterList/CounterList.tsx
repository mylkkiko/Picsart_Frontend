import type { CounterItem } from "../../helpers/types"

type CounterListProps = {
    timers: CounterItem[]
}

export const CounterList = ({ timers }: CounterListProps) => {
    return (
        <div className="overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-900/70 shadow-lg shadow-emerald-950/40 backdrop-blur-sm">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                    <thead className="bg-slate-800/60 text-xs uppercase tracking-wider text-emerald-300/70">
                        <tr>
                            <th className="px-5 py-4 font-semibold">Id</th>
                            <th className="px-5 py-4 font-semibold">Start time</th>
                            <th className="px-5 py-4 font-semibold">End time</th>
                            <th className="px-5 py-4 text-center font-semibold">Completed?</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                        {
                            timers.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-5 py-16 text-center text-slate-400">There are no timers</td>
                                </tr>
                            ) : (
                                timers.map(timer =>
                                    <tr key={timer.id} className="transition hover:bg-slate-800/50">
                                        <td className="px-5 py-4 font-mono font-medium uppercase tracking-wider text-slate-100">{timer.id.slice(0, 4)}</td>
                                        <td className="px-5 py-4 tabular-nums text-slate-400">{timer.startTime.toLocaleTimeString()}</td>
                                        <td className="px-5 py-4 tabular-nums text-slate-400">{timer.endTime ? timer.endTime.toLocaleTimeString() : "--"}</td>
                                        <td className="px-5 py-4 text-center">
                                            <span className={`inline-flex min-w-12 justify-center rounded-full px-2.5 py-1 text-xs font-semibold ${
                                                timer.status === "finished"
                                                    ? "bg-emerald-500/15 text-emerald-300"
                                                    : "bg-pink-500/15 text-pink-300"
                                            }`}>
                                                {timer.status === "finished" ? "Yes" : "No"}
                                            </span>
                                        </td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
