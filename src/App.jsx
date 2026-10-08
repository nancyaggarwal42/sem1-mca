import React from 'react'
import Home from './pages/Home'
import SignIn from './pages/SignIn'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";



const App = () => {
  return (
     <BrowserRouter>
      <Routes>

        <Route path="/Home" element={<Home />} />

        <Route path="/" element={<Signup />} />


      </Routes>
    </BrowserRouter>
    
  )
}

export default App