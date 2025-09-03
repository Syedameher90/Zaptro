import React from 'react'
import { Link } from 'react-router-dom'
// import Logo from '../assets/Logo.png'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
   <footer className=" w-full h-56 bg-gray-900 text-white flex flex-row justify-around">
       <div className="max-w-8xl mt-4">
                <Link to={'/'}><h1 className='font-bold text-3xl'><span className='text-red-500 font-serif text-6xl'>S</span>yedStore</h1></Link>
                <p>Powering Your World with the Best in Electronics.</p>
                <p>13 Electronics St, Style City, NY 10001</p>
                <p>Email: support@Syedstore.com</p> 
                <p>Phone: (123) 456-7890</p> 
    </div>
    <div className='mt-4'>
      <h2 className="text-2xl text bold">Customer Services</h2 >
      <ul>
      <li>Contact Us</li>
      <li>Shiping & Retruns</li>
      <li>FAQs</li>
      <li>Order Traking</li>
      <li>Size Guide</li>
      </ul>
    </div>
    <div className='gap-3 mt-4'>
      <h2 className="text-2xl text bold">Follow Us</h2 >
      <div className="flex flex-row gap-3 mt-2">
      <FaInstagram/>
      <FaTwitterSquare/>
      <FaPinterest/>
      <FaFacebook/>      
    </div>
    </div>
    <div className='mt-4'>
      <h2 className="text-2xl text bold mb-2">Stay in the Loop</h2 >
      <p>Subscribe to get special offers, free giveaways, and more</p>
      <div className='flex justify center mt-3'>
        <input className='bg-white text-black px-5 py-2' type="text" placeholder='Enter Your Email' />
        <button className="bg-red-600 px-5 py-2 rounded-tr-3xl rounded-br-2xl">Subcribe</button>
      </div>
    </div>
   </footer>
  )
}

export default Footer
