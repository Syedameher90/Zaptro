import React, { useEffect, useState } from "react"
import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import Home from './Pages/Home.jsx'
import Products from './Pages/Products.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Cart from './Pages/Cart.jsx'
import Navbar from './components/Navbar.jsx'
import axios from "axios"



function App() {
const [location, setLocation ]= useState(null)
  const [openDropdown, setOpenDropdown] = useState(false)

const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async pos => {
      const { latitude, longitude } = pos.coords
      // console.log(latitude, longitude);

     const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&email=youremail@example.com`;

      try {
        const location = await axios.get(url)
        const exactLocation = location.data.address
        setLocation(exactLocation)
        setOpenDropdown(false)
        // console.log(exactLocation);

      } catch (error) {
        console.log(error);

      }

    })
  }

  useEffect(() => {
    getLocation()
  }, [])

  return (
    <BrowserRouter>
    <Navbar location={location} getLocation={getLocation} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/Cart" element={<Cart/>}></Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App
