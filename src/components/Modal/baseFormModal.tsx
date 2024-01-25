

import React from 'react'
import Input from '../register-form/input'

type Props = {
    mainHeading: string
    subHeading: string | React.ReactNode
    footer: React.ReactNode
    mainContent: React.ReactNode
    onClose: () => void
    isOpen: boolean
}

function BaseFormModal({ mainHeading, subHeading, footer, mainContent, onClose, isOpen }: Props) {
    return (
        <>
            {
                isOpen && (

                    <>

                        {/* <!-- Modal --> */}
                        <div
                            onClick={onClose}
                            className=" w-screen  fixed bg-rose-50 z-[400] p-4 flex items-center justify-center h-screen">
                            <div 
                            onClick={(e) => e.stopPropagation()}
                            className="w-[95%] bg-white rounded-lg p-6 sm:w-96 max-w-full shadow-lg transform transition-all duration-300" >
                                {/* <!-- Modal Header --> */}
                                <div className="flex justify-between items-center border-b-2 border-gray-200 pb-4">
                                    <h2 className="text-2xl font-semibold">{mainHeading}</h2>
                                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </button>
                                </div>

                                {/* <!-- Modal Content --> */}
                                <div className="mt-6 space-y-4">
                                    {
                                        typeof (subHeading) === "string"
                                            ? <p className="text-lg text-gray-600">{subHeading}</p>
                                            : subHeading
                                    }

                                    <div className="flex flex-col space-y-4">
                                        {
                                            mainContent
                                        }

                                    </div>
                                </div>

                                {/* <!-- Additional Information --> */}
                                {/* <div className="mt-6 text-sm text-gray-500">
                                        <p>Create a new project from scratch or import an existing project from your GitHub repository.</p>
                                        </div> */}
                            </div>
                        </div >

                    </ >


                )
            }
        </>

    )
}

export default BaseFormModal