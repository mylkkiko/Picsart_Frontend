import { useForm, type SubmitHandler } from "react-hook-form";
import type { Account, User } from "../../../helpers/types";
import { requierdValidator, salaryValidator } from "../../../helpers/validator";

type Props = {
    onAdd: (user: Account) => void
}

export const AddUser:React.FC<Props> = ({onAdd}) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Account>()

    const handleAdd: SubmitHandler<Account> = data => {
        onAdd(data);
    }

    const fieldClass = "w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 transition focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40";
    const labelClass = "text-xs font-semibold uppercase tracking-wider text-emerald-300/70";

    return (
        <div>
            <form
                onSubmit={handleSubmit(handleAdd)}
                className="overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-900/70 shadow-lg shadow-emerald-950/40 backdrop-blur-sm"
            >
                <div className="border-b border-emerald-500/20 bg-slate-800/60 px-5 py-4">
                    <h3 className="text-base font-semibold tracking-tight text-emerald-300">
                        Add User
                    </h3>
                </div>

                <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                        {errors.name && <p>{errors.name.message}</p>}
                        <label htmlFor="name" className={labelClass}>Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="James"
                            className={fieldClass}
                            {...register("name", requierdValidator)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        {errors.surname && <p>{errors.surname.message}</p>}
                        <label htmlFor="surname" className={labelClass}>Surname</label>
                        <input
                            id="surname"
                            type="text"
                            placeholder="Smith"
                            className={fieldClass}
                            {...register("surname", requierdValidator)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        {errors.gender && <p>{errors.gender.message}</p>}
                        <label htmlFor="gender" className={labelClass}>Gender</label>
                        <div className="relative">
                            <select
                                id="gender"
                                defaultValue=""
                                {...register("gender", requierdValidator)}
                                className={`${fieldClass} appearance-none pr-10 capitalize`}
                            >
                                <option value="" disabled></option>
                                <option value="female">female</option>
                                <option value="male">male</option>
                            </select>
                            <span
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-xs text-emerald-300/70"
                            >
                                ▼
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        {errors.salary && <p>{errors.salary.message}</p>}
                        <label htmlFor="salary" className={labelClass}>Salary</label>
                        <input
                            id="salary"
                            type="number"
                            min="0"
                            placeholder="60.000"
                            className={`${fieldClass} tabular-nums`}
                            {...register("salary", salaryValidator)}
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <input
                            type="submit"
                            value="Add user +"
                            className="w-full cursor-pointer rounded-xl bg-emerald-500 px-4 py-2.5 font-medium text-slate-950 shadow-md shadow-emerald-900/50 transition hover:bg-pink-400 hover:shadow-pink-900/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 active:scale-95 sm:w-auto sm:px-8"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}
