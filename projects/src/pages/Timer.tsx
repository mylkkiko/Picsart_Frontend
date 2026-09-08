import type { CounterItem } from "../helpers/types";
import { useEffect, useState } from "react"
import { Counter } from "../components/Counter/Counter";
import { CounterList } from "../components/CounterList/CounterList";

export const Timer = () => {
    const [counters, setCounters] = useState<CounterItem[]>([]);
    const [view, setView] = useState<"Timers" | "List">("Timers");

    useEffect(() => {
        const interval = setInterval(() => {
            setCounters(prev => prev.map((count) => {
                if (count.status !== "running") {
                    return count;
                }
                if (count.timeLeft <= 1) {
                    return { ...count, timeLeft: 0, status: "finished", endTime: new Date() };
                }
                return { ...count, timeLeft: count.timeLeft - 1 }
            }));
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    function handleAddCounter(): void {
        setCounters(counter => {
            return [...counter, { id: crypto.randomUUID(), timeLeft: 600, status: "running", startTime: new Date() }];
        })
    }

    function handleTimerStop(id: string): void {
        setCounters(counter => counter
            .map(timer => timer.id === id ? { ...timer, timeLeft: 600 } : timer)
        )
    }

    function handleTimerPause(id: string): void {
        setCounters(counter => counter.map(timer => timer.id === id ? { ...timer, status: timer.status === "running" ? "paused" : "running" } : timer))
    }

    function handleTimerDelete(id: string): void {
        setCounters(counter => counter.filter(timer => timer.id !== id));
    }

    return (
        <div className="mx-auto flex max-w-5xl flex-col gap-10 py-10 sm:py-14">
            <header className="flex flex-col gap-6 border-b border-emerald-500/20 pb-8 sm:flex-row sm:items-end sm:justify-between">
                <h1 className="bg-gradient-to-r from-emerald-400 to-pink-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                    Timer
                </h1>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <button
                        onClick={handleAddCounter}
                        className="inline-flex w-fit items-center gap-2 self-start rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-medium text-slate-950 shadow-md shadow-emerald-900/50 transition-all duration-300 hover:bg-pink-400 hover:shadow-pink-900/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-95 sm:self-auto"
                    >
                        Create
                        <span aria-hidden="true" className="text-base leading-none">+</span>
                    </button>
                    <nav className="inline-flex gap-1 self-start rounded-xl border border-emerald-500/20 bg-slate-900/70 p-1 shadow-sm shadow-emerald-950/50 backdrop-blur-sm sm:self-auto">
                        <button
                            onClick={() => setView("Timers")}
                            className={`rounded-lg px-5 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 ${view === "Timers"
                                ? "bg-emerald-500 text-slate-950 shadow-sm shadow-emerald-900/50"
                                : "text-slate-400 hover:bg-slate-800 hover:text-emerald-300"
                                }`}
                        >
                            Timers
                        </button>

                        <button
                            onClick={() => setView("List")}
                            className={`rounded-lg px-5 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 ${view === "List"
                                ? "bg-emerald-500 text-slate-950 shadow-sm shadow-emerald-900/50"
                                : "text-slate-400 hover:bg-slate-800 hover:text-emerald-300"
                                }`}
                        >
                            List
                        </button>
                    </nav>

                    
                </div>
            </header>
            {
                view === "Timers" ? (
                    counters.length === 0 ? (
                        <p className="rounded-2xl border border-dashed border-emerald-500/30 bg-slate-900/50 p-16 text-center text-slate-400">
                            There are no timers
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {counters.map((counter) => (
                                <Counter
                                    key={counter.id}
                                    timer={counter}
                                    onDelete={handleTimerDelete}
                                    onStop={handleTimerStop}
                                    onPause={handleTimerPause}
                                />
                            ))}
                        </div>
                    )
                ) : (
                    <CounterList timers={counters} />
                )
            }
        </div>
    )
}
