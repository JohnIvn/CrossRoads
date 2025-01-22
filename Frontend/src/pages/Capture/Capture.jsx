import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import CaptureHeader from "../../partials/CaptureHeader";
import CaptureRouter from "./CaptureRouter";

export default function Capture() {

	return (
		<section
			className='flex flex-col justify-start items-center w-screen h-screen'
		>
			<CaptureHeader />
			<div
				className='flex flex-col justify-start items-center'
			>
				<Routes>
					<Route path="" element={<CaptureRouter />} />
				</Routes>
			</div>


		</section>


	)

}