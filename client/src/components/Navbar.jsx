import React, { useState } from 'react'
import { Link } from 'react-scroll'
import '../App.css'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
    const elements= [
        {'id':1, 'name':'Store', 'link':'/Store'},
        {'id':2, 'name':'Mac', 'link':'/Mac'},
        {'id':3, 'name':'iPad', 'link':'/iPad'},
        {'id':4, 'name':'iPhone', 'link':'/iPhone'},
        {'id':5, 'name':'Watch', 'link':'/Watch'},
        {'id':6, 'name':'AirPods', 'link':'/AirPods'},
        {'id':7, 'name':'TV & Home', 'link':'/TV&Home'},
        {'id':8, 'name':'Entertainment', 'link':'/Entertainment'},
        {'id':9, 'name':'Accessories', 'link':'/Accessories'},
        {'id':10, 'name':'Support', 'link':'/Support'},
    ]
    const [open, setOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center bg-black text-white fixed w-full h-20 bg-opacity-90">
            <div className="text-white px-4 md:px-10">
                <a href="#"><i className="fa-brands fa-apple"></i></a>
            </div>

            {/* Navigation for medium and larger screens */}
            <ul className={`md:flex hidden ${open ? 'hidden' : 'flex space-x-6'}`}>
                {elements.map((route) => (
                    <Link
                        to={route.link}
                        smooth={true}
                        duration={500}
                        key={route.id}
                        onClick={() => setOpen(false)} // Close the menu on item click
                    >
                        <li className="text-white hover:text-gray-400 hover:scale-105 duration-300">
                            {route.name}
                        </li>
                    </Link>
                ))}
            </ul>

            {/* Hamburger menu icon for small screens */}
            <div
                onClick={() => setOpen(!open)}
                className="md:hidden px-4 cursor-pointer w-7 h-7 text-white"
            >
                {open ? <XMarkIcon className='text-white' /> : <Bars3Icon className='text-white' />}
            </div>

            {/* Mobile menu for small screens */}
            {open && (
                <ul className="flex flex-col justify-center items-end top-20 py-4 right-0 absolute w-full md:hidden backdrop-blur-sm text-white">
                    {elements.map((route) => (
                        <Link
                            to={route.link}
                            key={route.id}
                            smooth={true}
                            duration={500}
                            onClick={() => setOpen(false)} // Close the menu on item click
                        >
                            <li className="hover:text-gray-400 hover:scale-105 duration-300 my-2 py-3 px-6 font-semibold border-gray-100 border-spacing-2 w-full">
                                {route.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            )}

            <div className="text-white space-x-4 md:space-x-6 px-4">
                <a href="#"><i className="fas fa-search"></i></a>
                <a href="#"><i className="fa-solid fa-bag-shopping"></i></a>
            </div>
        </nav>
    )
}