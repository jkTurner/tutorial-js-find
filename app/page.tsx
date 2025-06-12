import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col w-full max-w-[1280px] h-[60vh] justify-center items-center mx-auto">
			<h1 className="font-semibold text-lg mb-4">React JS Map Method Tutorial</h1>
			<p className="opacity-70 mb-4 w-[400px] text-center">Practice how to use the .filter() method with live React examples from simple conditions to dynamic dropdown and checkbox filters.</p>
			<div className="flex gap-4">
				<Link href="/simple">
					<button className="bg-teal-200 py-2 px-4 text-slate-800 cursor-pointer hover:opacity-70">
						Simple Find
					</button>
				</Link>
				<Link href="/find-object">
					<button className="bg-teal-200 py-2 px-4 text-slate-800 cursor-pointer hover:opacity-70">
						Find Object
					</button>
				</Link>
				<Link href="/find-user-input">
					<button className="bg-teal-200 py-2 px-4 text-slate-800 cursor-pointer hover:opacity-70">
						Find User Input
					</button>
				</Link>
				<Link href="/find-nested-object">
					<button className="bg-teal-200 py-2 px-4 text-slate-800 cursor-pointer hover:opacity-70">
						Find Nested Object
					</button>
				</Link>
			</div>
		</div>
	);
}