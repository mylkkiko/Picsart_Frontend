import type { User } from "../../../helpers/types"

type Props = {
    users: User[]
}

export const UserList: React.FC<Props> = ({ users }) => {
    return (
        <div className="overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-900/70 shadow-lg shadow-emerald-950/40 backdrop-blur-sm">
            <div className="flex items-center justify-between gap-4 border-b border-emerald-500/20 bg-slate-800/60 px-5 py-4">
                <h3 className="text-base font-semibold tracking-tight text-emerald-300">
                    User List
                </h3>

                {users.length > 0 && (
                    <span className="inline-flex min-w-6 justify-center rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-semibold tabular-nums text-emerald-300">
                        {users.length}
                    </span>
                )}
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                    <thead className="bg-slate-800/60 text-xs uppercase tracking-wider text-emerald-300/70">
                        <tr>
                            <th className="px-5 py-4 font-semibold">id</th>
                            <th className="px-5 py-4 font-semibold">name</th>
                            <th className="px-5 py-4 font-semibold">surname</th>
                            <th className="px-5 py-4 text-center font-semibold">gender</th>
                            <th className="px-5 py-4 text-right font-semibold">salary</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                        {
                            users.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-5 py-16 text-center text-slate-400">
                                        There is no users
                                    </td>
                                </tr>
                            ) : (
                                users.map(user => (
                                    <tr key={user.id} className="transition hover:bg-slate-800/50">
                                        <td className="px-5 py-4 tabular-nums text-slate-400">{user.id}</td>
                                        <td className="px-5 py-4 font-medium text-slate-100">{user.name}</td>
                                        <td className="px-5 py-4 font-medium text-slate-100">{user.surname}</td>
                                        <td className="px-5 py-4 text-center">
                                            <span
                                                className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium capitalize ${user.gender === "male"
                                                        ? "bg-emerald-500/10 text-emerald-300"
                                                        : "bg-pink-500/10 text-pink-300"
                                                    }`}
                                            >
                                                {user.gender}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 text-right font-semibold tabular-nums text-pink-300">
                                            {user.salary}
                                        </td>
                                    </tr>
                                ))
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
