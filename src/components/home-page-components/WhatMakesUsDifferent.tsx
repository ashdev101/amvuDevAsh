import { ourBenefits } from "../../utils/home-utils/homeUtils"
import { Check, Dashboard, Device, IllusBG, PersonalDetails, User } from "../../utils/home-utils/images"
import "../../styles/home-styles/whatMakesIUsDifferent.css"
import Button from "../Button"
const WhatMakesUsDifferent = () => {
    return (
        <div className="w-full 2xl:mt-[120px] xl:mt-[500px] sm:mt-[400px] mt-[500px] relative">
            <h2 className="all-home-components-heading-h1">What Makes Us Different</h2>
            <div className="w-full h-full flex">

                {/* left side content */}
                <div className="2xl:w-[50%] w-full flex flex-col lg:items-center items-start">
                    <h3 className="text-[#DC1F27] xl:w-[510px] md:w-[450px] sm:w-[350px] w-[310px] font-[700] xl:text-[45px] md:text-[35px] sm:text-[30px] text-[25px] xl:leading-[55px] ml-[50px]  md:mt-[80px] mt-[40px]">
                        Experience the all in one portal for all your needs like
                    </h3>
                    <div className="2xl:w-full h-full xl:ml-[100px]">
                    <div className="flex items-center flex-wrap justify-center 2xl:w-[700px] md:w-[85%]  w-[90%] sm:gap-[50px] gap-[60px] md:ml-[100px] sm:ml-[20px] md:mt-[80px] mt-[35px] sm:mx-0 mx-[30px] m-auto">
                            {
                                ourBenefits.length && ourBenefits.map((text, index) => (
                                    <div key={index} className="flex gap-[10px] md:w-[292.56px] sm:w-[240px]  w-[132px] sm:h-[51px] h-[24px]">
                                        <img src={Check} alt="check" className="w-[23.8px] h-[24px]" />
                                        <p className="sm:text-[16px] text-[10px]">
                                            {text}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="2xl:ml-[100px] ml-[0px] mt-[50px] flex justify-center items-center lg:gap-[200px] gap-[50px]">

                            <Button text="Explore" />
                            <Button text="Download App" />
                        </div>
                    </div>
                </div>

                {/* Right side content */}
                <div className="w-[50%] 2xl:flex hidden">
                    <div className="w-[689px] h-[619px] m-auto relative">
                        <img src={IllusBG} alt="" className="w-[549.37px] h-[551.72px] absolute top-[10%] left-[30px] z-10" />
                        <div className="w-[623px] h-[353px] absolute top-[25%] left-[10px] z-30 flex justify-center items-center">
                            <div className="flex h-full w-full relative justify-between items-center">
                                <img src={User} alt="" className="w-[141px] h-[339px] z-20" />
                                <img src={PersonalDetails} alt="" className="w-[398px] h-[263px] absolute left-[17%] z-10 " />
                                <div className="z-10 relative">
                                    <img src={Device} alt="" className="w-[168px] h-[339px] z-20 absolute" />
                                    <img src={Dashboard} alt="" className="w-[168px] h-[339px] z-10" />
                                </div>
                            </div>
                        </div>
                        <div className="ellipse z-30"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WhatMakesUsDifferent
