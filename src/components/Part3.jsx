import React from 'react'
import start from '../assets/Star.svg'

const rewards = [
  {
    title: 'Rewards',
    desc: 'The best credit cards offer some tantalizing combinations of promotions and prizes'
  },
  {
    title: 'Flexibility',
    desc: 'Easily manage your credit card and payments with flexible options'
  },
  {
    title: 'Security',
    desc: 'Your money and transactions are protected with advanced security measures'
  }
]

const Part3 = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between mt-20 mb-20 px-4 md:px-20'>
      
      {/* Left Section */}
      <div className="left w-full md:w-1/2 md:mr-10 mb-10 md:mb-0">
        <h1 className='text-white text-4xl md:text-5xl font-bold leading-tight'>
          You do the business, we'll handle the money.
        </h1>
        <p className='text-gray-400 tracking-wide mt-5 max-w-md'>
          With the right credit card, you can improve your financial life by building credit, earning rewards, and saving money. But with hundreds of credit cards on the market.
        </p>
        <div className="mt-8 inline-block px-8 py-4 md:w-40 text-center rounded-2xl bg-gradient-to-r from-white via-cyan-300 to-cyan-400 text-black font-semibold cursor-pointer">
          Get Started
        </div>
      </div>

      {/* Right Section */}
      <div className="right flex flex-col items-center md:items-start gap-6 w-full md:w-1/2">
        {rewards.map((item, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center p-6 w-full sm:w-10/12 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 rounded-2xl hover:from-slate-600 hover:via-slate-800 hover:to-slate-900 transition-all duration-500">
            
            <div className="icon flex items-center p-2 mb-4 sm:mb-0 sm:mr-4">
              <img src={start} alt="" />
            </div>
            
            <div className="text">
              <h2 className='text-white text-xl md:text-2xl font-semibold'>{item.title}</h2>
              <p className='text-gray-400 text-sm md:text-base'>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Part3
