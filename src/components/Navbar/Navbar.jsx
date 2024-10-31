import React from 'react';
import "./Navbar.css";
import { FaUserAlt } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { TbTruckDelivery } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { Disclosure } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../asserts/img/logo.svg";

function Navbar() {
    const navigation = [
        { name: 'WOMEN', href: '/women' },
        { name: 'MEN', href: '/men' },
        { name: 'KIDS', href: '/kids' },
        { name: 'NEW IN', href: '/' },
        { name: 'BEAUTY', href: '/kids' },
        { name: 'ACCESSORIES', href: '/' },
        { name: 'HOME', href: '/' },
        { name: 'SPECIAL OFFER', href: '/' },
        { name: 'THE EDIT', href: '/' },
    ];

    return (
        <Disclosure as="nav" className="navbar fixed top-0 left-0 w-full z-50 bg-transparent">
            {({ open }) => (
                <>
                    <div className="navUp flex items-center justify-between p-4">
                        <Link to="/">
                            <img src={logo} alt="Logo" className="logo h-8" />
                        </Link>
                        {/* Hide input on smaller devices */}
                        <div className="navUpMid hidden lg:flex items-center">
                            <input type="text" placeholder='FIND YOUR FAVOURITES' className="search-input" />
                            <CiSearch />
                        </div>
                        <div className="navUpRight flex items-center">
                            <TbTruckDelivery className="icon" />
                            <FaUserAlt className="icon" />
                            <LiaShoppingBagSolid className="icon" />
                            <Disclosure.Button className="lg:hidden p-2">
                                {open ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
                            </Disclosure.Button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <Disclosure.Panel className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md">
                        <div className="flex flex-col space-y-1 p-4">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as={Link}
                                    to={item.href}
                                    className="block text-black hover:bg-gray-200 rounded-md p-8"
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex space-x-4">
                        {navigation.map((item) => (
                            <Link key={item.name} to={item.href} className="navLink">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </>
            )}
        </Disclosure>
    );
}

export default Navbar;
