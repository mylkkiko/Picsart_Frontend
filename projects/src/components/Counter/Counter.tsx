import { formatTime } from "../../helpers/formatTime";
import type { CounterItem } from "../../helpers/types";

type CounterItemProps = {
  timer: CounterItem,
  onStop: (id: string) => void,
  onPause: (id: string) => void,
  onDelete: (id: string) => void,
};

export const Counter = ({timer, onStop, onDelete, onPause}: CounterItemProps) => {
    return (
        <div className="group relative flex flex-col items-center gap-5 rounded-2xl border border-emerald-500/20 bg-slate-900/70 p-6 shadow-lg shadow-emerald-950/40 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-pink-400/40 hover:shadow-xl hover:shadow-pink-950/40">
            <div className="bg-gradient-to-r from-emerald-400 to-pink-400 bg-clip-text text-5xl font-bold tabular-nums tracking-tight text-transparent">
                {formatTime(timer.timeLeft)}
            </div>

            <span className="h-px w-12 rounded-full bg-gradient-to-r from-emerald-400 to-pink-400" />

            <div className="flex w-full items-center justify-center gap-2">
                <button onClick={() => onStop(timer.id)}
                    className="flex-1 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 shadow-md shadow-emerald-900/50 transition hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 active:scale-95"
                >
                    Stop
                </button>
                <button onClick={() => onPause(timer.id)} className="flex-1 rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 active:scale-95">
                    {timer.status === "running" ? "Play" : "Pause"}
                </button>
                <button onClick={() => onDelete(timer.id)} className="flex-1 rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-2 text-sm font-medium text-slate-400 transition hover:border-pink-400 hover:bg-pink-500/10 hover:text-pink-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 active:scale-95">
                    Delete
                </button>
            </div>
        </div>
    )
}
