import React from "react"
import icon from "../src/assets/react.svg"
import Home from "./Pages/Home.jsx"
import { BrowserRouter, Routes, Route } from "react-router"
import Products from "./Pages/Products.jsx"
import About from "./Pages/About.jsx"
import Contact from "./Pages/Contact.jsx"

function App() {

  return (
  <BrowserRouter>
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
