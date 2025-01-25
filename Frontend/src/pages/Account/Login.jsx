import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Login() {
	const [isVisible, setVisible] = useState(false)

	const toggleVisibility = () => {
		setVisible (prev => !prev)
	}
	

	return (

		<section
			className='flex flex-col justify-center items-center w-full h-full border-zinc-400 border-x-2'
		>

			<form
				className="flex flex-col justify-center items-center w=3/5 md:w-2/5 gap-2 border border-zinc-200 h-auto p-2 shadow-2xl shadow-gray-400 rounded-xl"
				action=""
			>

				<h1
					className='flex text-center justify-center items-center flex-wrap text-3xl font-bold text-zinc-800'
				>
					Log In
				</h1>


				<div
					className='flex flex-col justify-start items-center w-3/4'
				>
					<label
						className="flex justify-start items-center w-full text-zinc-800 font-medium"
						htmlFor="email"
					>
						Email:
					</label>
					<input

						className='flex justify-start items-center w-full border-2 border-zinc-400 outline-none rounded-lg px-1 text-gray-600 font-medium'
					/>
				</div>
				<div
					className='flex flex-col justify-start items-center w-3/4'
				>

					<label
						className="flex justify-start items-center w-full text-zinc-800 font-medium"
						htmlFor="email"
					>
						Password:
					</label>

					<div
						className="relative flex justify-center items-center w-full"
					>
						<input
							className='flex justify-start items-center w-full border-2 border-zinc-400 outline-none rounded-lg px-1 text-gray-600 font-medium'
							type={isVisible ? "text" : "password"}
							name="password"
							id="password"
						/>
						<button
							className="absolute text-gray-600 right-0 mx-2 w-6 h-6"
							type="button"
							onClick={toggleVisibility}
						>
							<FontAwesomeIcon icon={ isVisible ? faEyeSlash :  faEye} />
						</button>
					</div>
				</div>

				<div
					className='flex justify-between items-center w-3/4'
				>
					<Link
						className="font-medium text-sm transition-all duration-300 text-zinc-600 hover:text-zinc-950"
						to='/crossroad/register'
					>
						Create an Account?
					</Link>

					<Link
						className="font-medium  text-sm text-zinc-600 hover:text-zinc-950 transition-all duration-300"
						to='/crossroad/register'
					>
						<FontAwesomeIcon
							className="mx-2"
						icon={faGoogle}/>
						Log In with Google
					</Link>
				</div>

				<input
					className="flex justify-center items-center text-center text-white font-medium w-24	 h-8 rounded-lg bg-zinc-800 hover:bg-gray-200 hover:text-black outline-none transition-all duration-300 cursor-pointer"
					type="button"
					value='Login'
				/>
			</form>

		</section>
	)

}