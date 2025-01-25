import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import CaptureHeader from "../../partials/CaptureHeader";
import Capture from "./Capture";
import Login from "../Account/Login";
import Register from "../Account/Register";
export default function CaptureRouter() {

	return (
		<section
			className='flex flex-col justify-start items-center w-screen h-screen'
		>
			<CaptureHeader />
			<div
				className='flex flex-col justify-start items-center w-full lg:w-4/5 h-full mt-10 transition-all duration-300'
			>
				<Routes>
					<Route path="" element={<Capture/>} />
					<Route path="login" element={<Login/>} />
					<Route path="register" element={<Register/>} />
				</Routes>
			</div>


		</section>


	)

}