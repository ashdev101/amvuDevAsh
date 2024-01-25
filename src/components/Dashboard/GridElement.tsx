import React from 'react'

type Props = {
    imgSrc : string 
    alt : string
    heading : string
}

function GridElement({ imgSrc , heading , alt}: Props) {
    return (
        <section 
        className=" w-[130px] h-[130px] flex flex-col items-center justify-center gap-2 border transition hover:scale-105 hover:bg-white hover:rounded-md">
            <img src={imgSrc} alt= {alt} className=" w-[30px] h-[30px]" />
            <span className="text-[12px] min-w-max font-bold text-[ #ADB8CC]">{ heading}</span>
        </section>
    )
}

export default GridElement