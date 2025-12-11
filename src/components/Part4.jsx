import React from 'react'
import card from '../assets/card.png'
const Part4 = () => {
  return (
    <div className='flex justify-between items-center mt-5'>
      <div className="left justify-center items-center p-10 ml-15  w-1/2">
            <h1 className='text-white text-5xl font-bold'>You do the business, <br />
          we'll handle the money.</h1>
         <  p className='text-gray-400 tracking-wider mt-5'>With the right credit card, you can improve your <br /> financial life by building credit, earning rewards and  <br /> saving money. But with hundreds of credit cards <br /> on the market.</p>
         <div className="mt-8 but bg-gradient-to-r from-white text-black font-semibold via-cyan-300 to-cyan-400 w-40 text-center rounded-2xl p-5">
    Get Started 
     </div>
        </div>
        <div className="right w-1/2 mr-8">
            <img src={card} alt="" />
        </div>
    </div>
  )
}

export default Part4
