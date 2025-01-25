import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function CaptureHeader() {
	const [activeDropdown, setActiveDropdown] = useState(null);
	const headerButtons = [
		{
			label: 'Services',
			content: ['Temp', 'Temp', 'Temp'],
		},
		{
			label: 'Products',
			content: ['Temp', 'Temp'],
		},
		{
			label: 'About Us',
			content: ['Contacts', 'FAQ', 'Our Company'],
		},
	];

	const toggleMenu = (index) => {
		setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));
	};

	const toggleSmallMenu = () => {
		setSmallDropdown(smallDropdown => !smallDropdown)
	}

	return (

		<header
			className="flex flex-col justify-start items-center w-full border-b border-b-gray-600 transition-all duration-300 overflow-hidden fixed backdrop-blur-md"
			style={{ height: activeDropdown !== null ? '16rem' : '2.5rem' }}
		>
			<div
				className="flex justify-between lg:justify-between items-center w-full lg:w-3/4 h-10 transition-all duration-300"
			>
				<div
					className="flex justify-start items-center h-10 gap-2 w-auto"

				>
					<Link className="flex justify-center items-center w-36 text-gray-800 text-2xl font-bold" to="/crossroad">
						CrossRoads
					</Link>
					{headerButtons.map((item, index) => (
						<button
							key={index}
							className="hidden md:flex justify-center items-center w-auto p-4 lg:w-32 lg:p-0 h-4/5 gap-2 font-medium text-black rounded-lg outline-none  hover:bg-gray-600 hover:text-white transition-all duration-500"
							onClick={() => toggleMenu(index)}
						>
							{item.label}
							<FontAwesomeIcon icon={activeDropdown === index ? faCaretUp : faCaretDown} />
						</button>
					))}
					<a
						href="/"
						className="hidden lg:flex justify-center items-center w-auto px-4 h-4/5 gap-2 font-medium text-black rounded-lg outline-none  hover:bg-gray-600 hover:text-white transition-all duration-500"
					>
						Blog
					</a>
				</div>

				<div
					className="hidden lg:flex justify-start items-center h-full w-auto gap-2"
				>
					<Link
						to="/"
						className="flex justify-center items-center w-32 h-4/5 gap-2 font-medium text-black rounded-lg outline-none  hover:bg-gray-600 hover:text-white transition-all duration-500"
					>
						Contact Us
					</Link>
					<Link
						to="/crossroad/register"
						className="flex justify-center items-center w-32 h-4/5 gap-2 font-bold bg-zinc-800 text-white rounded-full border border-zinc-950 outline-none focus:outline-1 hover:bg-white hover:text-black hover:outline-white transition-all duration-300"
					>
						Try it now
					</Link>
				</div>
				<div
					className='flex lg:hidden '
				>
					<button
						type='button'
						onClick={() => toggleMenu(3)}
						className='flex justify-center items-center w-8 h-8 text-xl rounded-lg outline-none hover:text-white hover:bg-zinc-800 transition-all duration-300'
					>
						{<FontAwesomeIcon icon={faBars} />}
					</button>


				</div>


			</div>

			{activeDropdown !== null && (
				<div
					className="flex justify-center items-center w-full lg:w-3/4 h-full gap-2 lg:gap-10 text-white lg:py-4 px-2 lg:px-10 overflow-hidden transition-all duration-300"
				>
					{activeDropdown !== null && (
						<div
							className="flex justify-around items-start w-full lg:w-3/4 h-full gap-4 lg:gap-8 text-white lg:py-4 px-2 lg:px-10 overflow-hidden transition-all duration-300 border"
						>
							<h1>Hello</h1>
							<div 
								className='flex justify-center items-center'
							>
								<Link to=''>Blog</Link>
								<Link to=''>Try it Now</Link>
								<Link to=''>Contact Us</Link>
							</div>
							
						</div>
					)}


					{activeDropdown < 3 && headerButtons[activeDropdown].content.map((item, index) => (
						<a key={index} href=''
							className="flex justify-center items-center text-lg text-black w-64 h-48 font-medium transition-all duration-200 rounded-md border-zinc-800 border hover:bg-zinc-950 hover:text-white"
						>
							{item}
						</a>
					))}
				</div>
			)}

		</header>

	)

}