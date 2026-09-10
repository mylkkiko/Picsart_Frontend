export type Homework = {
    id: number,
    path: string,
    title: string
}

export type Product = {
    id: number,
    name: string,
    price: number,
    image: string
}

export type BasketItem = Product & {
    quantity: number
}

export type CounterItem = {
    id: string,
    startTime: Date,
    endTime?: Date,
    timeLeft: number,
    status: "running" | "finished" | "paused",
}

export type User = {
    id: number, 
    name: string,
    surname: string,
    gender: "male" | "female",
    salary: number
}

export type Account = Omit<User, 'id'>