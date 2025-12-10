import React from 'react'
import discount from '../assets/Discount.svg'
import robot from '../assets/robot.png'

const Hero = () => {
  return (
    <div className='bg-gradient-to-r from-black via-slate-950 to-slate-800 w-full flex  justify-between'>
        <div className="left w-1/2 p-6 p-18">
            <div className="dis flex gap-2 border-2 max-w-max p-2 rounded-2xl bg-gradient-to-r from-slate-700 via-gray-950 to-slate-900">
                <img src={discount}  alt="" />
                <p><span className='text-white font-semibold'>20%</span> <span className='text-gray-300'>Discount For</span> <span className='text-white font-semibold'>1 Month</span> <span className='text-white font-semibold' >Account</span></p>
            </div>
            <div className="main">
               <div className="h flex
                flex-col gap-6 mt-8 text-7xl text-white font-bold">
                 <h1 className=''>The NEXT</h1>
                <h1 className='bg-gradient-to-r from-white via-cyan-300 to-cyan-400  text-transparent  bg-clip-text '>Generation</h1>
                <h1>Payment Method</h1>
                <p className='text-gray-400 font-medium text-[19px] tracking-wider'>
  <span className="block mb-2">Our team of experts use a methodology to identify</span>
  <span className="block mb-2">the credit cards most likely to fit your needs. We</span>
  <span className="block">examine annual percentage rates, annual fees.</span>
</p>

               </div>
              
            </div>
        </div>
        <div className="right  pt-5 ">
            <div className="r w-170">
                <img src={robot} alt="" />
            </div>
        </div>

      
    </div>
  )
}

export default Hero

