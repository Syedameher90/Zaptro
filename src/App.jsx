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
const [error, setErorr] = useState(null)
  const [openDropdown, setOpenDropdown] = useState(false)

  const getLocation = async () => {
    if(!navigator.geolocation) {
      setErorr('Geolocation is not supported by browser');
      return;
    }
    navigator.geolocation.getCurrentPosition( 
      async (position) => {
      const {latitude, longitude} = position.coords
      console.log(latitude, longitude)

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`

      try {
        const location = await axios.get(url, {
          headers: {
            'Accept-Lanugage' : 'en',
          }
        });
        const exactLocation = location.data.address;
        setLocation(exactLocation)
        setOpenDropdown(false)
        console.log(exactLocation)
        console.log(location)
      } catch (err) {
        console.error(err);
        setErorr('fialed to reload location info.');
      }
    },
 (err) => {
        console.error("Geolocation error:", err);
        setError("Location access denied or unavailable.");
      }
  )
  }
  useEffect(()=>{
    getLocation()
  },[])
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
