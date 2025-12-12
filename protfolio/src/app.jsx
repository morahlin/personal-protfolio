import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './components/Footer.jsx'
import About from './pages/About.jsx'
import Stack from './pages/Stack.jsx'
import Blog from './pages/Blog.jsx'
import Bookshelf from './pages/Bookshelf.jsx'
import Gallery from './pages/Gallery.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="py-4 flex items-center justify-center">
        <div className="main w-[95vw] bg-tertiary rounded-3xl">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/stack" element={<Stack />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/bookshelf" element={<Bookshelf />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App