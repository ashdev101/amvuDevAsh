import React from 'react'

type Props = {
    placeholder?: string
    isRequired?: boolean
    imgSrc?: string
    alt?: string
    InputType: "text" | "email" | "password" | "date" | "phone"
    name?: string
}

function IconInput({ placeholder, isRequired, imgSrc, alt, InputType , name}: Props) {
    return (
        <div className="flex flex-row items-center justify-center gap-4">

            <div className=" inset-y-0 start-0 flex items-center  pointer-events-none ">
                <img src={imgSrc} alt={alt} className=' w-10 h-10' />
            </div>
            <input type={InputType} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                placeholder={placeholder} required={isRequired} name={name}
            />

        </div>
    )
}

export default IconInput