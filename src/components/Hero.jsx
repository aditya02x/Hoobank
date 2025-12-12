import React from 'react'
import discount from '../assets/Discount.svg'
import robot from '../assets/robot.png'

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-black via-slate-950 to-slate-800 w-full
      flex flex-col md:flex-row justify-between items-center md:items-start px-6 py-10">

      {/* LEFT */}
      <div className="left w-full md:w-1/2 md:pr-10">
        
        {/* Discount Badge */}
        <div className="flex gap-2 border-2 max-w-max p-2 rounded-2xl
          bg-gradient-to-r from-slate-700 via-gray-950 to-slate-900">
          <img src={discount} alt="" />
          <p className="text-sm md:text-base">
            <span className="text-white font-semibold">20%</span>{" "}
            <span className="text-gray-300">Discount For</span>{" "}
            <span className="text-white font-semibold">1 Month</span>{" "}
            <span className="text-white font-semibold">Account</span>
          </p>
        </div>

        {/* Main Heading */}
        <div className="flex flex-col gap-4 mt-8 text-white font-bold text-center md:text-left">
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl">The NEXT</h1>

          <h1 className="text-4xl md:text-6xl lg:text-7xl
            bg-gradient-to-r from-white via-cyan-300 to-cyan-400 
            text-transparent bg-clip-text">
            Generation
          </h1>

          <h1 className="text-4xl md:text-6xl lg:text-7xl">Payment Method</h1>

          {/* Paragraph */}
          <p className="text-gray-400 font-medium text-[16px] md:text-[19px] tracking-wider max-w-lg mt-4 leading-relaxed">
            <span className="block md:mb-2">Our team of experts use a methodology to identify</span>
            <span className="block md:mb-2">the credit cards most likely to fit your needs. We</span>
            <span className="block">examine annual percentage rates, annual fees.</span>
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="right mt-10 md:mt-0 flex justify-center w-full md:w-1/2">
        <img
          src={robot}
          alt="robot"
          className="w-[80%] md:w-[90%] lg:w-[500px] object-contain"
        />
      </div>

    </div>
  )
}

export default Hero
