import { MapPin } from 'lucide-react'
import React from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'
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
            <li className="">Home</li>
            <li className="">Products</li>
            <li className="">About</li>
            <li className="">Contatct</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar