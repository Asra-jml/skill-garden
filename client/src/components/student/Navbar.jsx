import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { toast } from 'react-toastify';
import axios from 'axios';

const Navbar = () => {

  const location = useLocation();

  const isCoursesListPage = location.pathname.includes('/course-list');

  const { backendUrl, isEducator, setIsEducator, navigate, getToken } = useContext(AppContext)

  const { openSignIn } = useClerk()
  const { user } = useUser()

  const becomeEducator = async () => {

    try {

      if (isEducator) {
        navigate('/educator')
        return;
      }

      const token = await getToken()
      const { data } = await axios.get(backendUrl + '/api/educator/update-role', { headers: { Authorization: `Bearer ${token}` } })
      if (data.success) {
        toast.success(data.message)
        setIsEducator(true)
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b py-4 transition-all duration-300 ${isCoursesListPage ? 'bg-black border-gray-800 text-gray-200' : 'bg-black border-gray-800'}`}>
  <img onClick={() => navigate('/')} src='' alt="Logo" className="w-28 lg:w-32 cursor-pointer" />

  {/* Desktop Nav */}
  <div className="md:flex hidden items-center gap-6 text-gray-200">
    {user && (
      <div className="flex items-center gap-5">
        <button onClick={becomeEducator} className="hover:text-teal-400 transition">
          {isEducator ? 'Educator Dashboard' : 'Become Educator'}
        </button>
        <span className="text-gray-500">|</span>
        <Link to="/my-enrollments" className="hover:text-teal-400 transition">My Enrollments</Link>
      </div>
    )}
    {user ? (
      <UserButton />
    ) : (
      <button onClick={() => openSignIn()} className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-full transition">
        Create Account
      </button>
    )}
  </div>

  {/* Mobile Nav */}
  <div className="md:hidden flex items-center gap-2 sm:gap-4 text-gray-200">
    <div className="flex items-center gap-1 sm:gap-2 text-sm">
      <button onClick={becomeEducator} className="hover:text-teal-400 transition">
        {isEducator ? 'Dashboard' : 'Become Educator'}
      </button>
      {user && (
        <>
          <span className="text-gray-500">|</span>
          <Link to="/my-enrollments" className="hover:text-teal-400 transition">Enrollments</Link>
        </>
      )}
    </div>
    {user ? (
      <UserButton />
    ) : (
      <button onClick={() => openSignIn()}>
        <img src={assets.user_icon} alt="user" className="w-6 h-6" />
      </button>
    )}
  </div>
</div>

  );
};

export default Navbar;