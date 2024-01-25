import React, { useState } from 'react'

type Props = {

}

function SearchInput() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div
                onClick={() => setIsOpen(true)}
                className='  cursor-pointer p-2 rounded-full flex items-center justify-center bg-white'>
                <img src="go.png" alt="" className='w-[30px] h-[30px] ' />
            </div>
            {
                isOpen
                    ?
                    (
                        <main
                            onClick={() => setIsOpen(false)}
                            className='lg:hidden fixed inset-0 bg-white z-10' >
                            <div
                                onClick={(e) => e.stopPropagation()}
                                className=' mt-10 max-w-md mx-auto'>
                                <div className=" border relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                                    <div className="grid place-items-center h-full w-12 text-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>

                                    <input
                                        className="peer placeholder:text-[#ADB8CC] placeholder:text-[12px] placeholder:font-bold h-full w-full  outline-none text-sm text-gray-700 pr-2"
                                        type="text"
                                        id="search"
                                        placeholder="Search products , Orders and Clients"
                                    />
                                </div>
                            </div>
                        </main>
                    )
                    : null
            }
        </>
    )
}

export default SearchInput