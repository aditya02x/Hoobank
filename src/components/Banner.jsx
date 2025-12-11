import React from 'react'

const Banner = () => {
  return (
    <div className='mt-10 items-center flex justify-between p-10 bg-gradient-to-r from-black via-slate-950 to-slate-800 w-full'>
      <div className="one ml-20 flex items-center">
        <p><span className='text-white font-bold text-5xl'>3800+</span> <span className='text-2xl bg-gradient-to-r from-white via-cyan-300 to-cyan-400  text-transparent  bg-clip-text'>Active Users</span></p>
      </div>
       <div className="one flex items-center">
        <p><span className='text-white font-bold text-5xl'>230+</span> <span className='text-2xl bg-gradient-to-r from-white via-cyan-300 to-cyan-400  text-transparent  bg-clip-text'>Companys Trusted</span></p>
      </div>
       <div className="one mr-20 flex items-center">
        <p><span className='text-white font-bold text-5xl'>
$230M+</span> <span className='text-2xl bg-gradient-to-r from-white via-cyan-300 to-cyan-400  text-transparent  bg-clip-text'>Transactions</span></p>
      </div>
    </div>
  )
}

export default Banner
