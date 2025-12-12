import React from "react";

const Banner = () => {
  return (
    <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-y-6 md:gap-y-0 md:gap-x-24 px-6 md:px-10 py-6 md:py-8 bg-gradient-to-r from-black via-slate-950 to-slate-800 w-full">

      {/* 1st Box */}
      <div className="flex items-center gap-2 md:gap-4">
        <span className="text-white font-bold text-4xl md:text-5xl">3800+</span>
        <span className="text-lg md:text-2xl bg-gradient-to-r from-white via-cyan-300 to-cyan-400 text-transparent bg-clip-text">
          Active Users
        </span>
      </div>

      {/* 2nd Box */}
      <div className="flex items-center gap-2 md:gap-4">
        <span className="text-white font-bold text-4xl md:text-5xl">230+</span>
        <span className="text-lg md:text-2xl bg-gradient-to-r from-white via-cyan-300 to-cyan-400 text-transparent bg-clip-text">
          Companies Trusted
        </span>
      </div>

      {/* 3rd Box */}
      <div className="flex items-center gap-2 md:gap-4">
        <span className="text-white font-bold text-4xl md:text-5xl">$230M+</span>
        <span className="text-lg md:text-2xl bg-gradient-to-r from-white via-cyan-300 to-cyan-400 text-transparent bg-clip-text">
          Transactions
        </span>
      </div>

    </div>
  );
};

export default Banner;
