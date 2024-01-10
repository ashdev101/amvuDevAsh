import "../../styles/home-styles/whatMakesIUsDifferent.css"
import { ourBenefits } from "../../utils/home-utils/homeUtils"
import { Check, IllusBG, PersonalDetails, User } from "../../utils/home-utils/images"
import Button from "../Button"
const WhatMakesUsDifferent = () => {
    return (
        <div className="w-full 2xl:mt-[20px] xl:mt-[500px] sm:mt-[340px] mt-[450px] relative">
            <h2 className="all-home-components-heading-h1">What Makes Us Different</h2>
            <div className="w-full h-full flex">

                {/* left side content */}
                <div className="2xl:w-[50%] w-full flex flex-col  items-center">
                    <h3 className="text-[#DC1F27] xl:w-[510px] md:w-[450px] sm:w-[350px] w-[310px] font-[700] xl:text-[39px] md:text-[30px] text-[22px] md:leading-[55px] leading-[30px] ading-[55px] ml-[50px]  md:mt-[80px] mt-[40px]">
                        Experience the all in one portal for all your needs like
                    </h3>
                    <div className="2xl:w-full h-full xl:ml-[100px]">
                    <div className="flex items-center flex-wrap justify-center 2xl:w-[700px] md:w-[85%]  w-[90%] 2xl:gap-[20px] md:gap-[35px] gap-[30px] md:ml-[100px] sm:ml-[20px] md:mt-[80px] mt-[35px] sm:mx-0 mx-[30px] m-auto">
                            {
                                ourBenefits.length && ourBenefits.map((text, index) => (
                                    <div key={index} className="flex gap-[10px] xl:w-[292.56px] sm:w-[240px]  w-[132px] sm:h-[51px] h-[24px]">
                                        <img src={Check} alt="check" className="lg:w-[23.8px] w-[18px] lg:h-[24px] h-[18px]" />
                                        <p className="md:text-[16px] sm:text-[14px] text-[10px]">
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
                        <img src={IllusBG} alt="" className="rotate w-[549.37px] h-[551.72px] absolute top-[10%] left-[30px] z-10" />
                        <div className="w-[623px] h-[353px] absolute top-[25%] left-[10px] z-30 flex justify-center items-center">
                            <div className="flex h-full w-full relative justify-between items-center">
                                <img src={User} alt="" className="w-[141px] h-[339px] z-20" />
                                <img src={PersonalDetails} alt="" className="w-[550px] h-[400px] absolute left-[12%] z-10 " />
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
