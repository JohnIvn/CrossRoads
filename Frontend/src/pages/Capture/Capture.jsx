import { Link } from "react-router-dom";


export default function Capture() {

	return (
		<section
			className='flex flex-col justify-center items-center w-full h-full border-zinc-400 border-x-2 gap-4'
		>
			<h1
				className='flex text-center justify-center items-center flex-wrap w-1/3 h-24 text-5xl font-bold text-zinc-800'
			>
				Connect to stores around the Globe
			</h1>

			<div
				className='flex justify-center items-start w-full gap-2'
			>

				<Link
					to=''
					className="flex justify-center items-center text-center text-white font-medium px-3 h-10 rounded-lg bg-gray-800 border border-gray-800 hover:bg-transparent hover:text-black transition-all duration-300"
				>
					Try Our Demo
				</Link>

				<Link
					to=''
					className="flex justify-center items-center text-center text-black font-medium px-3 h-10 rounded-lg bg-transparent border border-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300"
				>
					Sign Up
				</Link>
			</div>
		</section>

	)

}