import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

export default function CaptureRouter () {

	return (
		<Router>
			<Route path="" element={ <h1>Temporary Text</h1> } />
		</Router>
	)

}