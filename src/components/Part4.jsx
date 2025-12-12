import React from 'react'
import card from '../assets/card.png'

const Part4 = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center mt-5 px-5 md:px-10'>
      {/* Left Section */}
      <div className="left flex flex-col justify-center items-start w-full md:w-1/2">
        <h1 className='text-white text-3xl md:text-5xl font-bold md:max-w-xl max-w-full'>
          You do the business, we'll handle the money.
        </h1>
        <p className='text-gray-400 tracking-wider text-xs md:text-base mt-5 md:max-w-xl max-w-full'>
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
        </p>
        <div className="mt-8 bg-gradient-to-r from-white via-cyan-300 to-cyan-400 text-black font-semibold text-center rounded-2xl w-32 md:w-40 p-3 md:p-5">
          Get Started
        </div>
      </div>

      {/* Right Section */}
      <div className="right w-full md:w-1/2 flex justify-center mt-5 md:mt-0">
        <img className='w-full h-auto' src={card} alt="Credit Card Illustration" />
      </div>
    </div>
  )
}

export default Part4
