import clsx from "clsx";
import React from "react";
import { useInView } from "react-intersection-observer";


interface ProcessCardType {
    image: string;
    text: string;
    href: string;
    linkText: string

}

const ProcessCard: React.FC<ProcessCardType> = ({ image, text, href, linkText }) => {
    const { ref, inView } = useInView()
    return (
        <div className={clsx("process-card", inView ? "animate-card-in" : "animate-fadeout")} ref={ref}>
            <p className="font-[700] text-[#1B2534] 2xl:text-[20px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px]">{text}</p>
            <img src={image} alt="" className="xl:w-[140px] lg:w-[130px] md:w-[120px] sm:w-[110px] w-[100px] xl:h-[130px] lg:h-[120px] md:h-[110px] sm:h-[100px] h-[90px] rounded-[24px] mt-[3%]" />
            <a href={href} className="btn font-mono font-[100] xl:text-[16px] lg:text-[14px] md:text-[12px] text-[10px] mt-[3%] ">
                {linkText}
            </a>
        </div>
    )
}

export default ProcessCard
