import { Link } from "react-router-dom";
import { NavLinks } from "../utils/navbarUtils";
import Logo from "../assets/Logo/Ambuvians_JPG-removebg.png"
import { useState } from "react";
import clsx from "clsx";
import { RxHamburgerMenu } from "react-icons/rx";
import Drawer from "./Drawer";
import { FaUser } from "react-icons/fa6";

const Navbar = () => {

  const pathname = window.location.pathname
  const [activeLink, setActiveLink] = useState(pathname ? pathname : "/");
  const [isOpen, setIsOpen] = useState(false);

  const toggleFunction = () => {
    setIsOpen((prev) => !prev)
  }

  const updateActiveLinks = (href: string) => {
    setActiveLink(href)
  }

  return (
    <nav className=" lg:h-[80px] md:h-[70px] h-[60px] min-w-full lg:pt-[20px] pt-[0] px-[5px] lg:bg-white bg-slate-300/50 ">
      <div className="h-full w-full">
        <div className=" float-left flex justify-center items-center ml-[5%] h-full">
          <a href={"/"} className=' italic text-xl font-bold'><img className="xl:w-[180px] lg:w-[150px] md:w-[120px]  w-[80px] xl:h-[90px] lg:h-[60px] md:h-[50px] h-[40px] lg:mt-[7px]" src={Logo} alt="Ambuvians" /></a>
        </div>

        {/* NavLinks For Desktop */}
        <div className="float-right h-full w-[80%] justify-evenly  items-center lg:flex hidden">
          {
            NavLinks && NavLinks.map((link, index) => (
              <Link
                onClick={() => updateActiveLinks(link.href)}
                to={link.href} key={index}
                className={clsx(`font-[700] text-[#333333] text-[25px] capitalize`, activeLink === link.href && 'text-[#FD0808]')}>
                {link.text}
              </Link>
            ))
          }
          <Link to="/login" className="bg-[#FD0808] text-white py-[12px] px-[32px] rounded-[8px] ml-[5%] text-[16px]">
            Login | Sign UP
          </Link>
        </div>

        {/* NavLinks For Mobile */}
        <div className="float-right h-full w-[20%] justify-evenly  items-center lg:hidden flex">
          <a href="" className="sm:text-[30px] text-[20px]"><FaUser /></a>
          <button className="sm:text-[40px] text-[25px]" onClick={toggleFunction}>
            <RxHamburgerMenu />
          </button>
          <Drawer isOpen={isOpen} toggleFunction={toggleFunction} updateActiveLinks={updateActiveLinks} activeLink={activeLink} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
