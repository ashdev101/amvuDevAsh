import { useInView } from "react-intersection-observer"
import "../../../styles/services-page-styles/BYCAmbulance.css"
import { CallUsIconGreen, SmsIconGreen } from "../../../utils/services-utils/images"
import clsx from "clsx"
const BYCAmbulance = () => {
    const { ref, inView } = useInView()
    return (
        <div className="flex flex-wrap  lg:gap-[25px] sm:gap-[20px] gap-[10px] md:px-[40px] px-[10px] items-center justify-center" ref={ref}>
            {/* BLS , PTS div */}
            <div className={clsx("BLS-ALS-div", inView ? "zoom-in" : "animate-fadeout")}>
                <a href="" className="BYCA-para-link">BLS</a>
                <a href="" className="BYCA-para-link">PTS</a>
            </div>

            {/* Book Your Customised Ambulance div for - Large Devices */}
            <div className={clsx("hidden md:flex flex-col BYC-Ambulance-div", inView ? "zoom-in" : "animate-fadeout")}>
                <div className="flex flex-col justify-center items-center w-full mt-[5%]">
                    <h2 className="BYC-Ambulance-h2">Book Your Customised Ambulance</h2>
                    <a href="" className="BYC-Ambulance-link">Book Now</a>
                </div>
                <div className="flex justify-between items-center px-[5%] w-full">
                    <a href="">    <img src={CallUsIconGreen} alt="Call Us" className="BYCA-callus-icons" /></a>
                    <a href="">   <img src={SmsIconGreen} alt="Call Us" className="BYCA-message-icons" /></a>
                </div>
            </div>

            {/* ALS , MTS div */}
            <div className={clsx("BLS-ALS-div", inView ? "zoom-in" : "animate-fadeout")}>
                <a href="" className="BYCA-para-link">ALS</a>
                <a href="" className="BYCA-para-link">MTS</a>
            </div>

            {/* Book Your Customised Ambulance div for- Small Devices */}
            <div className={clsx("flex flex-col md:hidden BYC-Ambulance-div", inView ? "zoom-in" : "animate-fadeout")}>
                <div className="flex flex-col justify-center items-center w-full mt-[5%]">
                    <h2 className="BYC-Ambulance-h2">Book Your Customised Ambulance</h2>
                    <div className="flex w-full justify-evenly items-center  mt-[3%]">
                        <a href=""> <img src={CallUsIconGreen} alt="Call Us" className="BYCA-callus-icons" /></a>
                        <a href="" className="BYC-Ambulance-link scale-on-hover">Book Now</a>
                        <a href="">  <img src={SmsIconGreen} alt="Call Us" className="BYCA-message-icons" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BYCAmbulance
