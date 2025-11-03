import React from 'react'
import Navbar from '../../components/dashboard/Navbar.jsx'
import SideNavBar from '../../components/dashboard/SideNavBar.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div className='flex flex-col h-screen'>
            <Navbar />
            <div className='flex h-full'>
                <SideNavBar />
                <div>
                    <Outlet />
                </div>

            </div>
        </div>
    )
}

export default Layout
