import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

type Props = {}

function CircularProgressProfileImage({ }: Props) {
    const percentage = 75;
    return (
        <div className=" relative ">

            <div className=" relative flex items-center justify-center">
                <CircularProgressbar
                    className=" w-[130px] h-[130px] "
                    value={percentage}
                    text={`${percentage}%`}
                    strokeWidth={2}
                    styles={buildStyles({
                        textSize: "0",
                        trailColor: "#DADEE6",
                        pathColor: "#3361FF",

                    })}
                    counterClockwise
                />
                <div className=' absolute  rounded-full'>
                    <img src="profile.jpeg" alt="" className=' w-[110px] h-[110px]  rounded-full object-contain object-center' />
                </div>
            </div>
            <div className=" w-[30px] h-[30px] rounded-full flex items-center justify-center p-2  bg-[#3361FF] text-white absolute top-[40%] right-[-10px]">
                2
            </div>
        </div>
    )
}

export default CircularProgressProfileImage