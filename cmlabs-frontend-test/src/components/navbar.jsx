import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // State to track if the menu is open

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex justify-between items-center p-4 border-b border-gray-300 bg-white">
            <Link to={"/"}>
                <p className="text-lg font-bold">mealapp</p>
            </Link>
            {/* Hamburger Icon */}
            <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
                <div className="space-y-1">
                    <div className="w-6 h-0.5 bg-gray-800"></div>
                    <div className="w-6 h-0.5 bg-gray-800"></div>
                    <div className="w-6 h-0.5 bg-gray-800"></div>
                </div>
            </div>

            {/* Dropdown Menu Items */}
            <div className={`absolute top-16 right-4 bg-white shadow-lg rounded-md transition-all duration-300 ${isOpen ? 'block' : 'hidden'} md:flex md:space-x-4 md:relative md:top-0 md:right-0 md:bg-transparent md:shadow-none`}>
                <Link to={"/"}>
                    <p className="p-2 cursor-pointer hover:bg-gray-100">Home</p>
                </Link>
                <Link to={"/"}>
                    <p className="p-2 cursor-pointer hover:bg-gray-100">Food</p>
                </Link>
                <Link to={"/"}>
                    <p className="p-2 cursor-pointer hover:bg-gray-100">Ingredients</p>
                </Link>
                <Link to={"/"}>
                    <p className="p-2 cursor-pointer hover:bg-gray-100">Local Culinary</p>
                </Link>
            </div>
        </div>
    );
}
