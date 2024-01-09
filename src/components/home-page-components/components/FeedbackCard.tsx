import React from 'react'
import StarRatings from "react-star-ratings"

interface FeedbackCardType {
    image: string;
    name: string;
    comment: string;
    postDesignation: string;
    rating: number;
}


const FeedbackCard: React.FC<FeedbackCardType> = ({ image, name, comment, postDesignation, rating }) => {
    return (
        <div className="feedback-card flex flex-col items-center">
            <img src={image} alt="" className="md:w-[149px] w-[100px] md:h-[149px] h-[100px] rounded-full" />
            <p className="text-center w-[255px] h-[78px] text-[#84829A] font-[500] md:text-[16px] text-[13px] mt-[30px] leading-[26px] overflow-auto hideScrollbar">
                {comment}
            </p>
            <div className='mt-[20px] md:h-[10px] h-[5px]'>
                <StarRatings starDimension="22px" numberOfStars={5} rating={rating} starRatedColor="#E77C40" />
            </div>
            <p className="w-[200px] h-[24px] mt-[40px] font-[600] md:text-[14px] text-[12px] text-[#23A6F0] text-center">
                {name}
            </p>
            <p className="text-center  md:h-[24px] h-[15px] text-[#252B42] font-[600] md:text-[15px] text-[13px] mt-[20px]">
                {postDesignation}
            </p>
        </div>
    )
}

export default FeedbackCard
