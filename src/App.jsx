import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
   <Router>
    
    <div className=" py-4 flex items-center justify-center ">
        <div className="main w-[95vw] bg-tertiary rounded-3xl">
           <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
             
              </Routes>
              <Footer />
          
        </div>
      </div>
      
      </Router>
  )
}

export default App