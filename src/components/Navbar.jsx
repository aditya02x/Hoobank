import React from 'react'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='relative w-full bg-gradient-to-r from-black via-slate-950 to-slate-800'>
      
      {/* Glow */}
      <div className="
        absolute left-[-200px] top-[-200px]
        w-[500px] h-[500px]
        bg-[radial-gradient(circle,rgba(0,245,255,0.45),transparent_70%)]
        blur-[150px] pointer-events-none
      "></div>

      {/* Navbar */}
      <div className='Navbar w-full text-white flex justify-between items-center p-3.5'>
        <div className="logo ml-15">
          <img className='w-[130px] object-contain' src={logo} alt="" />
        </div>

        <div className="links flex gap-15 mr-16 text-[19px]">
          <a href="">Home</a>
          <a href="">Features</a>
          <a href="">Product</a>
          <a href="">Clients</a>
        </div>
      </div>

    </div>
  )
}

export default Navbar
