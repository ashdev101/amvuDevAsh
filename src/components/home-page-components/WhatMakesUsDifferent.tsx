import "../../styles/home-styles/whatMakesIUsDifferent.css"
import { ourBenefits } from "../../utils/home-utils/homeUtils"
import { Check, IllusBG, DashboardWithPhone, User } from "../../utils/home-utils/images"
import Button from "../Button"
const WhatMakesUsDifferent = () => {
    return (
        <div className="w-full 2xl:mt-[20px] xl:mt-[400px] lg:mt-[450px] md:mt-[430px] sm:mt-[400px] mt-[530px]">
            <h2 className="all-home-components-heading-h1">What Makes Us Different</h2>


            <div className="w-full h-full flex justify-center items-center">

                {/* left side content */}
                <div className="2xl:w-[50%] lg:w-[62%] md:w-[82%] w-full flex flex-col  2xl:items-center  items-center">
                    <h3 className="what-makes-us-different-h3">
                        Experience the all in one portal for all your needs like
                    </h3>
                    <div className="2xl:w-full h-full 2xl:ml-[100px] xl:ml-[35px] flex justify-center flex-col items-center">
                        <div className="what-make-us-benefites-container">
                            {
                                ourBenefits.length && ourBenefits.map((text, index) => (
                                    <div key={index} className="flex gap-[10px] 2xl:w-[292.56px] sm:w-[240px]  w-[132px] sm:h-[51px] h-[24px]">
                                        <img src={Check} alt="check" className="lg:w-[23.8px] w-[18px] lg:h-[24px] h-[18px]" />
                                        <p className="2xl:text-[16px] sm:text-[14px] text-[10px]">
                                            {text}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="2xl:ml-[10px] ml-[0px] mt-[50px] flex 2xl:justify-center lg:justify-start justify-center items-center lg:gap-[200px] gap-[50px]">
                            <Button text="Explore" />
                            <Button text="Download App" />
                        </div>
                    </div>
                </div>

                {/* Right side content */}
                <div className="2xl:w-[50%] xl:w-[50%] 2xl:flex hidden">
                    <div className="2xl:w-[689px] w-full 2xl:h-[619px] h-full m-auto relative">
                        <img src={IllusBG} alt="" className="rotate 2xl:w-[549.37px] w-[400px] 2xl:h-[551.72px] h-[400px] absolute top-[10%] left-[30px] z-10" />
                        <div className="w-[623px] h-[353px] absolute 2xl:top-[25%] top-[16%] 2xl:left-[10px] left-[-18px] z-30 flex justify-center items-center">
                            <div className="flex h-full w-full relative justify-between items-center">
                                <img src={User} alt="" className="2xl:w-[141px] w-[100px] 2xl:h-[339px] h-[300px] z-20" />
                                <img src={DashboardWithPhone} alt="" className="2xl:w-[550px] w-[450px] 2xl:h-[400px] h-[300px] absolute left-[12%] z-10 " />
                            </div>
                        </div>
                        {/*  <div className="ellipse z-30"></div> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WhatMakesUsDifferent
