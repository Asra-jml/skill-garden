import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="flex md:flex-row flex-col-reverse items-center justify-between w-full px-8 border-t border-white/10 py-6 bg-black/60 backdrop-blur-md text-white">
  <div className='flex items-center gap-4'>
    <img className='hidden md:block w-20' src={assets.logo} alt="logo" />
    <div className='hidden md:block h-7 w-px bg-white/20'></div>
    <p className="text-xs md:text-sm text-white/60">
      © 2025 SkillGarden. All Rights Reserved.
    </p>
  </div>
  <div className='flex items-center gap-3 max-md:mt-4'>
    <a href="#" className="hover:scale-110 transition-transform duration-200">
      <img src={assets.facebook_icon} alt="Facebook" className="w-5 h-5" />
    </a>
    <a href="#" className="hover:scale-110 transition-transform duration-200">
      <img src={assets.twitter_icon} alt="Twitter" className="w-5 h-5" />
    </a>
    <a href="#" className="hover:scale-110 transition-transform duration-200">
      <img src={assets.instagram_icon} alt="Instagram" className="w-5 h-5" />
    </a>
  </div>
</footer>

  );
};

export default Footer;