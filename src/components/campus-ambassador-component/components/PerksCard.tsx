import clsx from "clsx";
import React from "react";
import { useInView } from "react-intersection-observer";


interface PerksCardType {
    image: string;
    text: string;
}

const PerksCard: React.FC<PerksCardType> = ({ image, text }) => {
    const { ref, inView } = useInView()
    return (
        <div className={clsx("perks-card", inView ? "animate-card-in" : "animate-fadeout")} ref={ref}>
            <p className="font-[700] text-[#1B2534] 2xl:text-[20px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] w-[97%] text-center">{text}</p>
            <img src={image} alt="" className="xl:w-[160px] lg:w-[140px] md:w-[130px] sm:w-[120px] w-[110px] xl:h-[160px] lg:h-[150px] md:h-[140px] sm:h-[130px] h-[100px] rounded-[24px] mt-[10%]" />
        </div>
    )
}

export default PerksCard
