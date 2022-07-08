import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <Router>
        <Navbar/>
    </Router>
  )
}
export default App