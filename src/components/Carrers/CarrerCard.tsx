import React from 'react'

type Props = {
    imgSrc: string
    title?: string
    tagArrays: string[]
    index: number
}

function CarrerCard({ imgSrc, title, tagArrays, index }: Props) {
    return (
        <section
            // style={{backgroundImage: `url(${imgSrc})` , backgroundSize: "cover" , opacity: "75%"}}
            className={`relative lg:w-[400px] lg:h-[600px] mx-2 md:mx-10 my-10 md:my-0  border rounded-3xl ${index % 2 === 0 ? "md:mb-[120px]" : "md:mt-[120px]"}  bg-gradient-to-b from-[#FDE0E2] to-[#d4cace]`} >
            <img src={imgSrc} alt="" className="  w-full h-full object-cover object-center grayscale-[25%] " />
            <div className=" w-full absolute bottom-2 left-5">
                <span className=" text-xl md:text-2xl  font-bold text-white">Web Developer</span>
                <div className=" max-w-[calc(100%-140px)] mt-2 flex flex-row items-center gap-2 flex-wrap">
                    {
                        tagArrays.map((tag, index) => (
                            <p key={index} className=" px-2 py-1 border border-white text-[11px] font-bold rounded-xl text-white max-w-max">{tag}</p>
                        ))
                    }
                </div>
                <button className="absolute bottom-0 right-10 px-2 py-1 rounded-lg bg-[#FFFFFFB8] text-sm font-bold text-[#FD0808]">Apply Now</button>
            </div>
        </section>
    )
}

export default CarrerCard