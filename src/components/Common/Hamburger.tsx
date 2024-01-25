import React, { useState, useEffect, useRef } from 'react';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        const handleMouseDown = (event: MouseEvent) => handleClickOutside(event);
        window.addEventListener('mousedown', handleMouseDown);

        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
        };
    }, [isOpen]);

    return (
        <div className="relative z-30">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none focus:shadow-outline"
            >
                <svg
                    className="h-6 w-6 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                    ></path>
                </svg>
            </button>

            {isOpen && (
                <div ref={menuRef} className="absolute right-0 mt-2 w-48 bg-slate-100 border rounded shadow-lg">
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                        Home
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                        About
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                        Services
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                        Join Us
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                        Contact Us
                    </a>

                    <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Login|Sign Up</button>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;
