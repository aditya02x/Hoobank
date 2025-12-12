import React, { useState } from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full bg-gradient-to-r from-black via-slate-950 to-slate-800">
      
      {/* Glow */}
      <div
        className="
          absolute left-[-200px] top-[-200px]
          w-[500px] h-[500px]
          bg-[radial-gradient(circle,rgba(0,245,255,0.45),transparent_70%)]
          blur-[150px] pointer-events-none
        "
      ></div>

      {/* Navbar */}
      <div className="Navbar w-full text-white flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <div className="logo">
          <img className="w-[120px] object-contain" src={logo} alt="logo" />
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="text-3xl md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Links */}
        <div
          className={`
            flex flex-col md:flex-row gap-6 text-lg
            absolute md:static bg-black/80 md:bg-transparent left-0 w-full md:w-auto
            px-6 py-4 md:p-0 transition-all duration-300
            ${open ? "top-16" : "top-[-400px]"}
          `}
        >
          <a href="#" className="hover:text-cyan-400">Home</a>
          <a href="#" className="hover:text-cyan-400">Features</a>
          <a href="#" className="hover:text-cyan-400">Product</a>
          <a href="#" className="hover:text-cyan-400">Clients</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
