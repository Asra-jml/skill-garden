import React, { useContext, useEffect, useState } from 'react'
import Footer from '../../components/student/Footer'
import { assets } from '../../assets/assets'
import CourseCard from '../../components/student/CourseCard';
import { AppContext } from '../../context/AppContext';
import { useParams } from 'react-router-dom';
import SearchBar from '../../components/student/SearchBar';

const CoursesList = () => {

    const { input } = useParams()

    const { allCourses, navigate } = useContext(AppContext)

    const [filteredCourse, setFilteredCourse] = useState([])

    useEffect(() => {

        if (allCourses && allCourses.length > 0) {

            const tempCourses = allCourses.slice()

            input
                ? setFilteredCourse(
                    tempCourses.filter(
                        item => item.courseTitle.toLowerCase().includes(input.toLowerCase())
                    )
                )
                : setFilteredCourse(tempCourses)

        }

    }, [allCourses, input])

    return (
        <>
            <div className="relative md:px-36 px-8 pt-20 text-left bg-black text-white min-h-screen">
            <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full'>
                <div>
                <h1 className='text-4xl font-semibold text-white'>Course List</h1>
                <p className='text-gray-400'>
                    <span onClick={() => navigate('/')} className='text-teal-400 cursor-pointer hover:underline'>Home</span>
                    <span className='text-gray-500'> / Course List</span>
                </p>
                </div>
                <SearchBar data={input} />
            </div>

            {input && (
                <div className='inline-flex items-center gap-4 px-4 py-2 border border-white/10 mt-8 -mb-8 text-gray-300 bg-white/5 backdrop-blur-md rounded'>
                <p>{input}</p>
                <img onClick={() => navigate('/course-list')} className='cursor-pointer' src={assets.cross_icon} alt="clear search" />
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0">
                {filteredCourse.map((course, index) => (
                <CourseCard key={index} course={course} />
                ))}
            </div>
            </div>
            <Footer />

        </>
    )
}

export default CoursesList 