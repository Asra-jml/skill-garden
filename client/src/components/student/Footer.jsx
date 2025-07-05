import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-black md:px-36 text-left w-full mt-10 border-t border-white/10">
  <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-12 border-b border-white/10">

    {/* Logo & Description */}
    <div className="flex flex-col md:items-start items-center w-full">
      <img src={assets.logo_dark} alt="logo" className="h-10" />
      <p className="mt-6 text-center md:text-left text-sm text-gray-400 max-w-xs">
        Empowering learners across the globe with world-class content and expert mentorship — anytime, anywhere.
      </p>
    </div>

    {/* Company Links */}
    <div className="flex flex-col md:items-start items-center w-full">
      <h2 className="font-semibold text-white mb-5">Company</h2>
      <ul className="flex md:flex-col w-full justify-between text-sm text-gray-400 md:space-y-2 text-center md:text-left">
        <li><a href="#" className="hover:text-teal-400 transition">Home</a></li>
        <li><a href="#" className="hover:text-teal-400 transition">About us</a></li>
        <li><a href="#" className="hover:text-teal-400 transition">Contact us</a></li>
        <li><a href="#" className="hover:text-teal-400 transition">Privacy policy</a></li>
      </ul>
    </div>

    {/* Newsletter */}
    <div className="hidden md:flex flex-col items-start w-full">
      <h2 className="font-semibold text-white mb-5">Subscribe to our newsletter</h2>
      <p className="text-sm text-gray-400 max-w-xs">
        Get the latest updates, insights, and curated content delivered to your inbox every week.
      </p>
      <div className="flex items-center gap-2 pt-4">
        <input
          className="border border-white/10 bg-white/5 backdrop-blur-sm text-gray-200 placeholder-gray-500 outline-none w-64 h-9 rounded px-3 text-sm"
          type="email"
          placeholder="Enter your email"
        />
        <button className="bg-teal-500 hover:bg-teal-600 transition w-24 h-9 text-white rounded">
          Subscribe
        </button>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <p className="py-4 text-center text-xs md:text-sm text-gray-500">
    © 2025 SkillGarden. All Rights Reserved.
  </p>
</footer>

  );
};

export default Footer;
