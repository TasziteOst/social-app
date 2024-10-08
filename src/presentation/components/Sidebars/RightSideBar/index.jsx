import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function RightSideBar() {
	return (
		<div className="w-[300px] max-lg:w-0 max-lg:hidden h-screen">
			<aside className="fixed top-0 w-[300px] max-lg:w-0 max-lg:hidden h-screen overflow-y-auto px-4 pt-2 bg-white dark:bg-zinc-950 border-l dark:border-zinc-800">
				<div>
					<div className="bg-gray-100 dark:bg-zinc-900 py-2 px-4 rounded-full flex items-center gap-2">
						<FaMagnifyingGlass className="text-zinc-600" />
						<input className="bg-transparent dark:text-white outline-none w-full text-sm" type="text" placeholder="Search..." />
					</div>
				</div>
			</aside>
		</div>
	);
}
