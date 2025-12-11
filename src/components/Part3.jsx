import React from 'react'
import start from '../assets/Star.svg'

const Part3 = () => {
  return (
    <div className='flex justify-between mt-20 mb-20'>
        <div className="left justify-center items-center p-10 ml-15  w-1/2">
            <h1 className='text-white text-5xl font-bold'>You do the business, <br />
          we'll handle the money.</h1>
         <  p className='text-gray-400 tracking-wider mt-5'>With the right credit card, you can improve your <br /> financial life by building credit, earning rewards and  <br /> saving money. But with hundreds of credit cards <br /> on the market.</p>
         <div className="mt-8 but bg-gradient-to-r from-white text-black font-semibold via-cyan-300 to-cyan-400 w-40 text-center rounded-2xl p-5">
    Get Started 
     </div>
        </div>
        <div className="right flex-col items-center gap-3  w-1/2 flex justify-center  ">
            <div className="one flex justify-center h-1/3 rounded-2xl  p-6 w-10/12 hover:bg-gradient-to-r
from-slate-600
via-slate-800
to-slate-900 transition-all duration-500">
                <div className="icon items-center flex p-2">
                    <img src={start} alt="" />
                </div>
                <div className="text">
                    <h1 className='text-white text-2xl font-semibold'>Rewards</h1>
                    <p className='text-gray-500'>The best credit cards offer some tantalizing  combinations of <br />  promotions and prizes</p>
                </div>
                
            </div>
                        <div className="one flex justify-center h-1/3 rounded-2xl  p-6 w-10/12 hover:bg-gradient-to-r
from-slate-600
via-slate-800
to-slate-900 transition-all duration-500">
                <div className="icon items-center flex p-2">
                    <img src={start} alt="" />
                </div>
                <div className="text">
                    <h1 className='text-white text-2xl font-semibold'>Rewards</h1>
                    <p className='text-gray-500'>The best credit cards offer some tantalizing  combinations of <br />  promotions and prizes</p>
                </div>
                
            </div>
                        <div className="one flex justify-center  h-1/3 rounded-2xl  p-6 w-10/12 hover:bg-gradient-to-r
from-slate-600
via-slate-800
to-slate-900 transition-all duration-500">
                <div className="icon items-center flex p-2">
                    <img src={start} alt="" />
                </div>
                <div className="text">
                    <h1 className='text-white text-2xl font-semibold'>Rewards</h1>
                    <p className='text-gray-500'>The best credit cards offer some tantalizing  combinations of <br />  promotions and prizes</p>
                </div>
                
            </div>

        </div>
      
    </div>
  )
}

export default Part3
