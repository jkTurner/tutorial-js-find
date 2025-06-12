const numbers = [1, 3, 5, 7, 9];

export default function SimplePage() {

    const foundNumber = numbers.find(num => num > 5); // return 7 (first value that is more than 5)

    return (
        <div className="flex flex-col w-full max-w-[600px] h-[60vh] gap-4 items-center justify-center mx-auto">
            <h1 className="font-semibold text-lg">Simple Find</h1>
            <span>Number Found: {foundNumber}</span>
        </div>
    )
}