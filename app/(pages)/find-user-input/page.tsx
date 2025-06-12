'use client'
import { useState } from "react"

const users = [
    { id: "001", name: "Jakkrit", email: "jakkrit@email.com" },
    { id: "002", name: "Elizabeth", email: "elizabeth@email.com" },
    { id: "003", name: "John", email: "john@email.com" },
]

export default function FindUserInputPage() {

    const [input, setInput] = useState("");
    const foundUser = users.find(user => user.name.toLowerCase() === input.toLowerCase());

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-[600px] h-[60vh] gap-4 mx-auto">
            <h1 className="font-semibold text-lg">Find from User Input</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search user's name..."
                className="py-2 px-4 bg-slate-500"
            />
            {foundUser && (
                <div className="flex flex-col gap-2">
                    <h2>User Found: </h2>
                    <p>ID: {foundUser.id}</p>
                    <p>Name: {foundUser.name}</p>
                    <p>Email: {foundUser.email}</p>
                </div>
            )}
        </div>
    )
}