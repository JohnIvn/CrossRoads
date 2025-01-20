import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AppRouter from "./AppRouter";
import './App.css'

function App() {

  return (
    <Router>
      <AppRouter/>
    </Router>
  )
}

export default App
