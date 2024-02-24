import React from 'react'
import esewa from '../images/esewa.jpg'

const Footer = () => {
  return (
    <div className='flex justify-between p-12 bg-[#EEF6F8]'>
      <div>
        <h2 className='font-extrabold text-2xl'>
        Health Sewa 
        </h2>

        <ul className='font-bold text-gray-400'>
          <li>Devinagar, Butwal-11</li>
          <li>Rupandehi, Lumbini , Nepal </li>
          <li>071-410380, 410479</li>
          <li>info@cct.edu.np</li>
        </ul>
      </div>
      <div>
        <h2 className='font-extrabold text-2xl'>
        Getting Started 
        </h2>
        <ul className='font-bold text-gray-400'>
          <li>About Us</li>
          <li>FAQS</li>
          <li>Blogs</li>
          <li>Why Use</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <h2 className='font-extrabold text-2xl'>
        Resources
        </h2>
        <ul className='font-bold text-gray-400'>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>   

      <div className='grid place-items-center'>
        <h2 className='font-extrabold text-2xl'>Donate Us</h2>
        <div 
        className='h-40 w-40 bg-blue-200'
        >
          <img src={esewa} alt="" />
          </div>
        </div>         
        </div>
  )
}

export default Footer