import React from 'react';
import "./Navbar.css";
import { FaUserAlt } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { TbTruckDelivery } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { Disclosure } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from "react-icons/hi"; // Importing the hamburger and close icons
import logo from "../../asserts/img/logo.svg";

function Navbar() {
    const navigation = [
        { name: 'WOMEN', href: '/women', current: false },
        { name: 'MEN', href: '/men', current: true },
        { name: 'KIDS', href: '/kids', current: false },
        { name: 'NEW IN', href: '/new', current: false },
        { name: 'BEAUTY', href: '/kids', current: false },
        { name: 'ACCESSORIES', href: '/new', current: false },
        { name: 'HOME', href: '/new', current: false },
        { name: 'SPECIAL OFFER', href: '/new', current: false },
        { name: 'THE EDIT', href: '/new', current: false },
    ];

    return (
        <div className="navbar">
            <div className="navUp">
                <div className="navUpLeft">
                    <Link to={"/"}>
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="navUpMid">
                    <input type="text" placeholder='FIND YOUR FAVOURITES' />
                    <CiSearch />
                </div>
                <div className="navUpRight">
                    <TbTruckDelivery />
                    <FaUserAlt />
                    <LiaShoppingBagSolid />
                </div>
            </div>

            {/* Navbar with Disclosure component */}
            <div className="navDown">
                <Disclosure as="nav" className="custom-navbar">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-40">
                                <div className="relative flex h-16 items-center justify-between">
                                    {/* Logo and Toggle Button */}
                                    <div className="flex items-center">

                                        <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none lg:hidden">
                                            {open ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
                                        </Disclosure.Button>
                                    </div>

                                    {/* Desktop Navigation Links */}
                                    <div className="hidden lg:flex flex-1 items-center justify-center">
                                        <div className="flex space-x-10">
                                            {navigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.href}
                                                    className="navLink"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Menu (visible when open) */}
                            <Disclosure.Panel className="lg:hidden">
                                <div className="space-y-1 px-2 pb-3 pt-2">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as={Link}
                                            to={item.href}
                                            className="navLink block px-3 py-2 rounded-md text-base font-medium"
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    );
}

export default Navbar;
