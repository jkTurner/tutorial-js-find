const users = [
    { id: "001", name: "Jakkrit Turner", email: "jakkrit@email.com" },
    { id: "002", name: "Elizabeth Johnson", email: "elizabeth@email.com" },
    { id: "003", name: "John Doe", email: "john@email.com" },
]

export default function FindObjectPage() {

    const targetId = "001";
    const foundUser = users.find(user => user.id === targetId);

    return (
        <div className="flex flex-col w-full max-w-[600px] h-[60vh] items-center justify-center gap-4 mx-auto">
            <h1 className="font-semibold text-lg">Find Object by ID</h1>
            <h2>Found User:</h2>
            {foundUser && (
                <div className="flex flex-col gap-2">
                    <p>ID: {foundUser.id}</p>
                    <p>Name: {foundUser.name}</p>
                    <p>Email: {foundUser.email}</p>
                </div>
            )}
        </div>
    )
}
