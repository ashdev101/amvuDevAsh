import React from 'react'
import SearchInput from './SearchInput'
import HamburgerMenu from '../Common/Hamburger'

type Props = {}

function Header({ }: Props) {
    return (
        <nav className=' realtive flex flex-row items-center justify-between w-full h-[80px] border-b border border-[#EDEFF2]' >
            <section className=' ml-3'>
                <img src="logoamb.png" alt="logo" className=' min-w-[150px] min-h-[50px] object-contain object-center' />
            </section>

            <section className=" hidden md:block absolute top-[100px] px-2 sm:px-0 w-full  sm:static sm:w-auto ">
                <ul className=' flex flex-row items-center gap-3 sm:gap-5 max-w-[430px] h-[20px] font-bold text-sm text-[#7D8FB3]'>
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Services
                    </li>
                    <li>
                        Join Us
                    </li>
                    <li>
                        Contact Us
                    </li>
                </ul>
            </section>

            <section className=' hidden lg:flex flex-row items-center justify-center w-[390px] h-[50px] relative bg-white rounded-full'>
                <img src="go.png" alt="" className='w-[30px] h-[30px] ml-5' />
                <input type="text"
                    className=' border-none outline-none w-full placeholder:text-[#ADB8CC] placeholder:text-[12px] placeholder:font-bold' placeholder='Search products , Orders and Clients' />
                <img src="search.png" alt="" className='w-[30px] h-[30px] mr-5' />
            </section>


            <section className=' mr-3 flex flex-row items-center gap-2'>
                <div className=" lg:hidden">
                    <SearchInput
                    />
                </div>
                <div className=' relative p-2 rounded-full bg-white'>
                    <img src="bell.png" alt="bell" className='min-w-[30px] min-h-[30px] ' />
                    <div className='bg-[#4FEE68] w-[10px] h-[10px] rounded-full absolute top-1 right-[-1px]'>

                    </div>
                </div>
                <div className=' md:hidden'>
                    <HamburgerMenu />
                </div>
            </section>


        </nav>
    )
}

export default Header