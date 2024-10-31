import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom.jsx'
import Footer from './components/Footer/Footer.jsx'

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout