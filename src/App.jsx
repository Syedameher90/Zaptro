import React from "react"
import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./Pages/Home.jsx"
import Products from "./Pages/Products.jsx"
import About from "./Pages/About.jsx"
import Contact from "./Pages/Contact.jsx"
import Navbar from "./components/Navbar.jsx"

function App() {

  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/products" element={<Products/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>

  </Routes>
  </BrowserRouter>
  )
}

export default App
