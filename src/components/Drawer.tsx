import React from 'react';
import "../styles/drawer.css";
import { IoCloseSharp } from "react-icons/io5";
import { NavLinks } from '../utils/navbarUtils';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface DrawerPropsTypes {
    isOpen: boolean,
    toggleFunction: () => void,
    updateActiveLinks: (href: string) => void,
    activeLink: string
}

const Drawer: React.FC<DrawerPropsTypes> = ({ isOpen, toggleFunction, updateActiveLinks, activeLink }) => {

    const closeDrawerAndUpdateLinks = (href: string) => {
        updateActiveLinks(href)
        toggleFunction()
    }
    console.log(activeLink)

    return (
        <div className={`drawer ${isOpen ? 'open' : ''}`}>
            <button className="text-[25px] float-right" onClick={toggleFunction}>
                <IoCloseSharp />
            </button>
            <div className="mt-[50px]">
                <div className="float-right h-full w-[80%] justify-evenly gap-[20px]  lg:hidden flex flex-col">
                    {
                        NavLinks && NavLinks.map((link, index) => (
                            <Link
                                onClick={() => closeDrawerAndUpdateLinks(link.href)}
                                to={link.href} key={index}
                                className={clsx(`font-[700] text-[19px] capitalize`, activeLink === link.href && 'text-[#FD0808]')}>
                                {link.text}
                            </Link>
                        ))
                    }
                    <Link to="/login" className="bg-[#FD0808] w-[150px] text-white py-[12px] px-[17px] rounded-[8px] text-[16px]">
                        Login | Sign UP
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Drawer;
