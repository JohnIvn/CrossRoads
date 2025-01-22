import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import CaptureRouter from "./pages/Capture/CaptureRouter";
import Capture from "./pages/Capture/Capture";

export default function AppRouter () {

	return (

		<Routes>
			<Route path='/' element={ <Navigate to='/crossroad/*'/> } />
			<Route path='/crossroad' element={ <Navigate to='/crossroad/*'/> } />
			<Route path='/crossroad/*' element={ <Capture/> } />
			<Route path='/home/*' element={ <h1>This is the landing page</h1> } />
		</Routes>

	)

}