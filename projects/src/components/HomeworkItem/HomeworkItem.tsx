import { Link } from "react-router";
import type { Homework } from "../../helpers/types";

type HomeworkCardProps = {
    homework: Homework;
}

export const HomeworkItem = ({homework}: HomeworkCardProps) => {
    return (
        <div className="group relative rounded-2xl bg-gradient-to-br from-emerald-500/40 via-slate-700/40 to-pink-500/40 p-[1px] shadow-lg shadow-emerald-950/50 transition duration-300 hover:-translate-y-1 hover:from-emerald-400/60 hover:to-pink-400/60 hover:shadow-xl hover:shadow-pink-950/50">
            <div className="flex h-full flex-col gap-3 rounded-2xl bg-slate-900/80 p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold tracking-tight text-emerald-300 transition-colors duration-300 group-hover:text-pink-300">
                    {homework.title}
                </h3>

                <span className="h-px w-12 rounded-full bg-gradient-to-r from-emerald-400 to-pink-400" />

                <Link
                    to={homework.path}
                    className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500 px-5 py-2 text-sm font-medium text-slate-950 shadow-md shadow-emerald-900/50 transition-all duration-300 hover:bg-pink-400 hover:shadow-pink-900/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-400 active:scale-95"
                >
                    Открыть
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
            </div>
        </div>
    )
}
