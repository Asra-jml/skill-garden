import React from 'react';
import { assets } from '../../assets/assets';
import SearchBar from '../../components/student/SearchBar';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-6 md:px-0 space-y-6 text-center bg-gradient-to-b from-black via-gray-900 to-black text-white">
  <h1 className="md:text-home-heading-large text-home-heading-small relative font-extrabold text-white max-w-3xl mx-auto leading-tight">
    Empower your future with courses
    <span className="text-teal-400"> that match your ambition.</span>
    <img src={assets.sketch} alt="sketch" className="md:block hidden absolute -bottom-6 right-0 w-24 opacity-80" />
  </h1>

  {/* Desktop Paragraph */}
  <p className="hidden md:block text-gray-300 max-w-2xl mx-auto text-base">
    Our curated curriculum connects you with top-tier instructors, immersive content, and a vibrant community to unlock your highest potential.
  </p>

  {/* Mobile Paragraph (aligned left for variation) */}
  <p className="md:hidden text-gray-400 max-w-sm mx-auto text-center px-2">
    Learn from world-class instructors with personalized content crafted for your goals.
  </p>

  <SearchBar />
</div>

  );
};

export default Hero;
