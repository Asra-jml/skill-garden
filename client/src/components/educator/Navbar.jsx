import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { UserButton, useUser } from '@clerk/clerk-react';

const Navbar = ({ bgColor }) => {

  const { isEducator } = useContext(AppContext)
  const { user } = useUser()

  return isEducator && user && (
    <div className={`flex items-center justify-between px-4 md:px-8 border-b border-white/10 py-3 bg-black/60 backdrop-blur-md ${bgColor}`}>
  <Link to="/">
    <img src={assets.logo} alt="Logo" className="w-28 lg:w-32" />
  </Link>
  <div className="flex items-center gap-5 text-gray-300 relative">
    <p className="text-sm md:text-base">Hi! {user.fullName}</p>
    <UserButton />
  </div>
</div>

  );
};

export default Navbar;