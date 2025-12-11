import React from "react";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg"; // corrected file names
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-slate-950 to-slate-800 text-gray-300 py-12 px-6 mt-20 border-t border-white/10 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo / About */}
        <div>
          <img className="w-50" src={logo} alt="" />
          <p className="mt-3 text-gray-400 text-sm">
            We help brands grow with modern design & powerful development.
          </p>
          <div className="flex gap-4 mt-4">
            <img src={facebook} alt="Facebook" className="h-6 w-6 hover:opacity-80 transition" />
            <img src={instagram} alt="Instagram" className="h-6 w-6 hover:opacity-80 transition" />
            <img src={twitter} alt="Twitter" className="h-6 w-6 hover:opacity-80 transition" />
            <img src={linkedin} alt="LinkedIn" className="h-6 w-6 hover:opacity-80 transition" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition cursor-pointer">Home</li>
            <li className="hover:text-white transition cursor-pointer">Services</li>
            <li className="hover:text-white transition cursor-pointer">About Us</li>
            <li className="hover:text-white transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Services</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition cursor-pointer">Web Design</li>
            <li className="hover:text-white transition cursor-pointer">UI/UX Design</li>
            <li className="hover:text-white transition cursor-pointer">Branding</li>
            <li className="hover:text-white transition cursor-pointer">Marketing</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Stay Updated</h2>
          <p className="text-gray-400 text-sm mb-3">
            Subscribe to our newsletter for new updates.
          </p>
          <div className="flex items-center bg-white/10 rounded-lg p-1 border border-white/10">
            <input
              type="text"
              placeholder="Enter email"
              className="bg-transparent flex-1 px-3 py-2 text-sm outline-none text-white"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-white/10 pt-5">
        © {new Date().getFullYear()} YourBrand — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
