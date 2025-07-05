import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContext';

const SideBar = () => {

  const { isEducator } = useContext(AppContext)

  const menuItems = [
    { name: 'Dashboard', path: '/educator', icon: assets.home_icon },
    { name: 'Add Course', path: '/educator/add-course', icon: assets.add_icon },
    { name: 'My Courses', path: '/educator/my-courses', icon: assets.my_course_icon },
    { name: 'Student Enrolled', path: '/educator/student-enrolled', icon: assets.person_tick_icon },
  ];

  return isEducator && (
    <div className='md:w-64 w-16 border-r min-h-screen text-base border-white/10 py-2 flex flex-col bg-black/60 backdrop-blur-md'>
  {menuItems.map((item) => (
    <NavLink
      to={item.path}
      key={item.name}
      end={item.path === '/educator'}
      className={({ isActive }) =>
        `flex items-center md:flex-row flex-col md:justify-start justify-center py-3.5 md:px-10 gap-3 transition-all duration-200 ${
          isActive
            ? 'bg-white/10 border-r-[6px] border-teal-400 text-white'
            : 'hover:bg-white/5 border-r-[6px] border-transparent text-gray-300 hover:text-white'
        }`
      }
    >
      <img src={item.icon} alt="" className="w-6 h-6" />
      <p className='md:block hidden text-sm'>{item.name}</p>
    </NavLink>
  ))}
</div>

  );
};

export default SideBar;