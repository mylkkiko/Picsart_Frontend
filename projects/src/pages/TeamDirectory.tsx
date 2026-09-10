import { useEffect, useState } from "react";
import { UserList } from "../components/Team/UserList/UserList";
import type { Account, User } from "../helpers/types";
import axios from "axios";
import { AddUser } from "../components/Team/AddUser/AddUser";

export const TeamDirectory = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        axios
            .get<User[]>("http://localhost:3000/users")
            .then(res => setUsers(res.data))
    }, [])

    const addUser = (body:Account) => {
        axios
            .post("http://localhost:3000/users", body)
            .then(response => setUsers(prev => [...prev, response.data]))
    }

    return (
        <div className="mx-auto flex max-w-5xl flex-col gap-12 py-10 sm:py-14">
            <header className="flex flex-col gap-6 border-b border-emerald-500/20 pb-8 sm:flex-row sm:items-end sm:justify-between">
                <h1 className="bg-gradient-to-r from-emerald-400 to-pink-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                    Team Directory
                </h1>
            </header>

            <section className="flex flex-col gap-8">
                <AddUser onAdd={addUser} />
                <UserList users={users} />
            </section>
        </div>
    )
}
