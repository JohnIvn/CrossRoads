import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import CaptureRouter from "./pages/Capture/CaptureRouter";

export default function AppRouter () {

	return (

		<Routes>
			<Route path='/' element={ <Navigate to='/crossroad'/> } />
			<Route path='/crossroad/*' element={ <CaptureRouter/> } />
			<Route path='/home/*' element={ <h1>This is the landing page</h1> } />
		</Routes>

	)

}