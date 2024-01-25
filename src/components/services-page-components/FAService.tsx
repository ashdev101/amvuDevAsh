import { useInView } from "react-intersection-observer"
import { AmbuviansImage } from "../../utils/home-utils/images"
import { CallUsIcon } from "../../utils/services-utils/images"
import BYCAmbulance from "./components/BYCAmbulance"
import WHTBookGPAS from "./components/WHTBookGPAS"
import clsx from "clsx"

const FAService = () => {
    const { ref: rightRef, inView: rightInView } = useInView()
    const { ref: leftRef, inView: leftInView } = useInView()
    return (
        <div className=" flex flex-col gap-[10px] lg:mt-[200px] mt-[50px] z-100">
            {/*   Fastest Ambulance Service */}
            <div className="flex">
                {/* Left Side Content */}
                <div className={clsx("flex-1 p-4 2xl:pl-[100px] xl:pl-[50px]", leftInView ? "animate-fadein" : "animate-fadeout")} ref={leftRef}>
                    <h2 className='font-[800] 2xl:text-[65px] xl:text-[60px] lg:text-[50px] md:text-[36px] sm:text-[30px] text-[23px]'>Fastest Ambulance Service </h2>
                    <p className="font-[300] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[12px] text-[#606060] xl:w-[90%] lg:w-[95%] w-full">
                        Choose Ambuvians for India's fastest ambulance services. We provide customizable ambulance services right at your doorstep. Book your ambulance now because at Ambuvians, <span className="font-[700]">We value life above all else.</span>
                    </p>
                </div>

                {/* Right Side Content */}
                <div className={clsx("flex-1 flex justify-center items-center 2xl:pl-[50px] xl:pr-[25px]", rightInView ? "zoom-in" : "animate-fadeout")} ref={rightRef}>
                    <div className="w-[95%] h-[80%] m-auto bg-[#1B2534] rounded-[20px] flex flex-col justify-evenly items-start pl-[10%] relative">
                        <p className="font-[800] 2xl:text-[42px] xl:text-[40px] lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] text-center text-white">Emergency <br /> Call</p>
                        <img src={CallUsIcon} alt="Call Us" className="2xl:w-[100px] xl:w-[97px] lg:w-[95px] md:w-[90px] sm:w-[80px] w-[70px]" />
                        <img src={AmbuviansImage} alt="Ambuvians" className="2xl:w-[380px] xl:w-[360px] lg:w-[300px] md:w-[250px] sm:w-[150px] w-[100px] absolute md:right-0 right-[6%] md:bottom-[-20px] bottom-[10px]" />
                    </div>
                </div>
            </div>
            {/* Book Your Customised Ambulance */}
            <BYCAmbulance />
            {/* Watch how to book and Google Play , App Store Boxes  */}
            <WHTBookGPAS />
        </div>
    )
}

export default FAService
