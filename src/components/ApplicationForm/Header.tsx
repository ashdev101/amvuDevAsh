import React from 'react'

type Props = {
    imgSrc : string 
    alt : string
    heading : string
}

function Header({ imgSrc , alt , heading}: Props) {
    return (
        <div className=" w-full py-1 px-2 flex flex-row items-center justify-start gap-2 bg-gradient-to-r from-[#FF0000] to-[#ED7B72]   ">
            <img src= {imgSrc} alt= {alt} className=" w-[35px] h-[35px]" />
            <span className=" font-bold text-md text-white">{heading}</span>
        </div>
    )
}

export default Header