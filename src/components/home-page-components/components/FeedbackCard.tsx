import React from 'react'
import StarRatings from "react-star-ratings"
import { Customer } from '../../../utils/home-utils/images';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';

interface FeedbackCardType {
    image?: string;
    name: string;
    comment: string;
    rating: number;
}


const FeedbackCard: React.FC<FeedbackCardType> = ({ image, name, comment, rating }) => {
    const { ref, inView } = useInView()
    return (
        <div className={clsx("feedback-card flex flex-col items-center", inView ? "animate-card-in" : "animate-fadeout")} ref={ref}>
            <img src={image ? image : Customer} alt="" className="md:w-[149px] w-[100px] md:h-[149px] h-[100px] rounded-full" />
            <p className="capitalize text-center w-[255px] h-[100px] text-[#84829A] font-[500] md:text-[16px] text-[13px] mt-[30px] leading-[26px] overflow-auto hideScrollbar">
                {comment}
            </p>
            <div className='mt-[25px] md:h-[10px] h-[5px]'>
                <StarRatings starDimension="22px" numberOfStars={5} rating={rating} starRatedColor="#E77C40" />
            </div>
            <p className="w-[200px] h-[20px] mt-[30px] font-[600] md:text-[14px] text-[12px] text-[#23A6F0] text-center">
                {name}
            </p>
        </div>
    )
}

export default FeedbackCard
