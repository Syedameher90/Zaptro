import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { MapPin } from 'lucide-react'
import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { FaCaretDown } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { Link, NavLink } from 'react-router-dom'
const Navbar = ({location, getLocation, openDropdown, setOpenDropdown}) => {
  const toggleDropdown = () => {
      setOpenDropdown(!openDropdown)
    
  }
  return (
    <div className=' bg-white py-3 px-4 shadow-xl'>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo section */}
        <div className="flex items-center  gap-7">
          <Link to={'/'}><h1 className='font-bold text-3xl'><span className='text-red-500 font-serif text-6xl'>S</span>yedStore</h1></Link>
      <div className="flex items-center gap-1 cursor-pointer text-gray-700">
        <MapPin className='text-red-500'/>
      <span className='font-semibold'>
  {location ? (
    <>
      <div>{location.county}</div>
      <div>{location.state}</div>
    </>
  ) : ( 
    "Add Address"
  )}
</span>

        <FaCaretDown onClick={toggleDropdown}/>
       </div>
       {
         openDropdown ? <div className="w-[250px] h-max shadow-2xl z-50 bg-white fixed top-21 left-60 border-2 p-2 border-gray-100 rounded-md">
          <h1 className='font-semibold mb-4 text-2xl flex justify-between'>Change Location <span onClick={toggleDropdown}><CgClose/></span> </h1>
         <button onClick={getLocation} className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-red-400 flex items-center justify-center">Detect my location</button>
         </div> : null
       }
        </div>
        <nav className="flex items-center gap-5">
          <ul className="flex gap-7 items-center text-xl font-semibold">
            <NavLink to={'/'} className={({isActive}) => `${isActive ? "border-b-2 transition-all border-red-500 " : "text-black"} cursor-pointer`}><li>Home</li></NavLink>
            <NavLink to={'/products'} className={({isActive}) => `${isActive ? "border-b-2 transition-all border-red-500 " : "text-black"} cursor-pointer`}><li>Products</li></NavLink>
            <NavLink to={'/about'}   className={({isActive}) => `${isActive ? "border-b-2 transition-all border-red-500 " : "text-black"} cursor-pointer`}><li>About</li></NavLink>
            <NavLink to={'/contact'} className={({isActive}) => `${isActive ? "border-b-2 transition-all border-red-500 " : "text-black"} cursor-pointer`}><li>Contact</li></NavLink>
          </ul>
          <Link to={'/cart'} className='relative'>
          <IoCartOutline className='h-7 w-7'/>
          <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3  text-white">0</span>
          </Link>
          <div>
         <SignedOut>
         <SignInButton className="bg-red-500 text-white px-3 py-2  rounded-md cursor-pio
         " />
         </SignedOut>
         <SignedIn>
         <UserButton />
         </SignedIn>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar