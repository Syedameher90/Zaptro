import React from 'react'
import logo from "../assets/react.svg"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-white py-3 shadow-xl'>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo section */}
        <div className="">
          <Link></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar