import clsx from "clsx";
import React from "react";
import { useInView } from "react-intersection-observer";
interface MentorCardType {
    image: string;
    name: string;
    experience: string;
    about: string;
    socialMediaLinks: {
        href: string;
        alt: string;
        icon: string
    }[]
}
const MentorCard: React.FC<MentorCardType> = ({ image, name, experience, about, socialMediaLinks }) => {
    const { ref, inView } = useInView()
    return (
        <div className={clsx("mentors-card", inView ? "animate-card-in" : "animate-fadeout")} ref={ref}>
            <img src={image} alt="" className="lg:w-[160px] md:w-[140px] w-[100px] lg:h-[160px] md:h-[140px] h-[100px] mt-[4%] object-cover  rounded-full" />
            <h2 className="w-[342px] mt-[10px] font-[500] lg:text-[30px] md:text-[28px] sm:text-[20px] text-[15px] text-center">{name}</h2>
            <p className="text-center text-[#84829A] font-[500] lg:text-[15px] md:text-[13px] sm:text-[10px] text-[8px] lg:mt-[15px] mt-[15px]">{experience}</p>
            <p className="text-justify lg:w-[350px] w-[90%] h-[120px] text-[#84829A] font-[400]  lg:text-[16px] md:text-[15px] sm:text-[14px] text-[12px] lg:mt-[14px] mt-[10px] overflow-auto hideScrollbar">
                {about}
            </p>
            <div className="flex justify-evenly gap-[20px] items-center lg:mt-[15px] mt-[2px]" >
                {
                    socialMediaLinks && socialMediaLinks.map((element, index) => (
                        <a key={index} href={element.href} className="lg:w-[58px] md:w-[40px] w-[30px] lg:h-[58px] md:h-[40px] h-[30px] "><img src={element.icon} alt={element.alt} /></a>
                    ))
                }
            </div>
        </div>
    )
}

export default MentorCard
