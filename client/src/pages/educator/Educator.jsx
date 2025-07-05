import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../components/educator/SideBar'
import Navbar from '../../components/educator/Navbar'
import Footer from '../../components/educator/Footer'

const Educator = () => {
    return (
        <div className="text-white min-h-screen bg-black">
        <Navbar />
        <div className="flex">
            <SideBar />
            <div className="flex-1 bg-black text-white">
            <Outlet />
            </div>
        </div>
        <Footer />
        </div>

    )
}

export default Educator