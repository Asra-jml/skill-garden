import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { useClerk, useUser } from '@clerk/clerk-react'
import { useLocation } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const CallToAction = () => {
  const location = useLocation();
  const isCoursesListPage = location.pathname.includes('/course-list');

  const { backendUrl, isEducator, setIsEducator, navigate, getToken } = useContext(AppContext);
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const becomeEducator = async () => {
    try {
      if (isEducator) {
        navigate('/educator');
        return;
      }

      const token = await getToken();
      const { data } = await axios.get(backendUrl + '/api/educator/update-role', {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (data.success) {
        toast.success(data.message);
        setIsEducator(true);
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0 bg-black text-center'>
      <h1 className='md:text-4xl text-2xl text-white font-semibold'>
        Learn anything, anytime, anywhere
      </h1>

      <p className='text-gray-400 sm:text-sm max-w-xl'>
        Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.
      </p>

      <div className='flex flex-wrap justify-center items-center font-medium gap-6 mt-6'>
        <button
          onClick={() => {
            if (!user) {
              openSignIn(); 
            } else {
              navigate('/course-list'); 
            }
          }}
          className='px-10 py-3 rounded-full text-white bg-teal-500 hover:bg-teal-600 transition'
        >
          Get started
        </button>

        {/*<button className='flex items-center gap-2 text-teal-400 hover:text-teal-300 transition'>
          Learn more
          <img src={assets.arrow_icon} alt="arrow_icon" className="w-4 h-4" />
        </button>*/}
      </div>
    </div>
  );
};

export default CallToAction;
