import { MapPin } from 'lucide-react'
import React from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  const location = false
  return (
    <div className=' bg-white py-3 shadow-xl'>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo section */}
        <div className="flex items-center  gap-7">
          <Link to={'/'}><h1 className='font-bold text-3xl'><span className='text-red-500 font-serif text-6xl'>S</span>yedStore</h1></Link>
      <div className="flex items-center gap-1 cursor-pointer text-gray-700">
        <MapPin className='text-red-500'/>
        <span className="font-semibold">{location ? <div></div> :"Add Address"}</span>
        <FaCaretDown/>
       </div>
        </div>
        <nav className="">
          <ul className="flex gap-5 items-center text-xl font-semibold">
            <NavLink to={'/'}><li>Home</li></NavLink>
            <NavLink to={'/products'}><li>Producta</li></NavLink>
            <NavLink to={'/about'}><li>About</li></NavLink>
            <NavLink to={'/contact'}><li>Contact</li></NavLink>

          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar