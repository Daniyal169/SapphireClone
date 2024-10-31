import React from 'react'
import { FaCcPaypal, FaCcVisa, FaCcMastercard, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <footer className="w-full bg-bgColor py-8">
            <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-start md:space-x-8 px-4">

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:w-3/4">
                    <div className="mb-8">
                        <p className="mb-6 text-sm font-semibold text-gray-700">CONTACT US</p>
                        <ul className="space-y-2 text-[12px] font-light text-gray-900">
                            <li>Sapphire Retail Head Office
                                1.5-Km, Defence Road, Bhobtian Chowk, Off Raiwind Road, Opposite University of Lahore, Lahore.</li>
                            <li>wecare@sapphireonline.pk</li>
                            <li>+92(0)42 111-738-245</li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <p className="mb-6 text-sm font-semibold text-gray-700">CUSTOMER CARE</p>
                        <ul className="space-y-2 text-[12px] font-light text-gray-900">
                            <li>Exchange & Return Policy</li>
                            <li>FAQS</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <p className="mb-6 text-sm font-semibold text-gray-700">INFORMATION</p>
                        <ul className="space-y-2 text-[12px] font-light text-gray-900">
                            <li>About us</li>
                            <li>SafePay Guide</li>
                            <li>Privacy Policy</li>
                            <li>Payments</li>
                            <li>Store Locator</li>
                            <li>Blogs</li>
                        </ul>
                    </div>
                </div>

                <div className="w-full md:w-1/2 mt-8 md:mt-0">
                    <p className="mb-6 text-sm font-semibold text-gray-700">Newsletter Signup</p>
                    <ul className="space-y-2 text-[12px] font-light text-gray-900">
                        <li>Subscribe to our Newsletter for Exclusive Updates</li>
                    </ul>

                    <form action="" className="mt-4 flex flex-col space-y-4">
                        <input
                            className="h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30"
                            type="email"
                            placeholder="Email"
                        />

                        <div className="flex space-x-4 text-2xl justify-center md:justify-start">
                            <FaInstagram />
                            <FaFacebook />
                            <FaYoutube />
                        </div>
                    </form>
                </div>
            </div>

            <hr className="my-4" />

            <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between px-4 space-y-4 md:space-y-0">
                <p className="text-sm font-medium text-gray-500 text-center md:text-left">
                    © 2024 Daniyal. All rights reserved.
                </p>

                <div className="flex space-x-4 text-2xl justify-center">
                    <FaCcPaypal />
                    <FaCcVisa />
                    <FaCcMastercard />
                </div>
            </div>
        </footer>
    )
}

export default Footer
