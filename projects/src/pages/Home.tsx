import { HomeworkItem } from "../components/HomeworkItem/HomeworkItem"
import type { Homework } from "../helpers/types";

export const Home = () => {
    const homeworks: Homework[] = [
        {
            id: 1,
            title: 'Online-shop',
            path: '/shop'
        },
        {
            id: 2,
            title: 'Timer',
            path: '/timer'
        },
        {
            id: 3,
            title: 'Team Directory',
            path: '/team'
        },
        {
            id: 4,
            title: 'ToDo List',
            path: '/todo'
        }
    ];

    return (
        <div>
            <div className="mx-auto max-w-5xl">
                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {homeworks.map((homework) => (
                        <HomeworkItem
                            key={homework.id} 
                            homework={homework}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
