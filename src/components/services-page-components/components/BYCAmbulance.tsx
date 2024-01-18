import "../../../styles/services-page-styles/BYCAmbulance.css"
import { CallUsIcon, SmsIcon } from "../../../utils/services-utils/images"
const BYCAmbulance = () => {
    return (
        <div className="flex flex-wrap  lg:gap-[25px] sm:gap-[20px] gap-[10px] md:px-[40px] px-[10px] items-center justify-center">
            {/* BLS , PTS div */}
            <div className="BLS-ALS-div">
                <p className="BYCA-para">BLS</p>
                <p className="BYCA-para">PTS</p>
            </div>

            {/* Book Your Customised Ambulance div for - Large Devices */}
            <div className="hidden md:flex flex-col BYC-Ambulance-div">
                <div className="flex flex-col justify-center items-center w-full mt-[5%]">
                    <h2 className="BYC-Ambulance-h2">Book Your Customised Ambulance</h2>
                    <a href="" className="BYC-Ambulance-link">Book Now</a>
                </div>
                <div className="flex justify-between px-[5%] w-full">
                    <img src={CallUsIcon} alt="Call Us" className="BYCA-callus-icons" />
                    <img src={SmsIcon} alt="Call Us" className="BYCA-message-icons" />
                </div>
            </div>

            {/* ALS , MTS div */}
            <div className="BLS-ALS-div">
                <p className="BYCA-para">ALS</p>
                <p className="BYCA-para">MTS</p>
            </div>

            {/* Book Your Customised Ambulance div for- Small Devices */}
            <div className="flex flex-col md:hidden BYC-Ambulance-div">
                <div className="flex flex-col justify-center items-center w-full mt-[5%]">
                    <h2 className="BYC-Ambulance-h2">Book Your Customised Ambulance</h2>
                    <div className="flex w-full justify-evenly items-center  mt-[3%]">
                        <img src={CallUsIcon} alt="Call Us" className="BYCA-callus-icons" />
                        <a href="" className="BYC-Ambulance-link">Book Now</a>
                        <img src={SmsIcon} alt="Call Us" className="BYCA-message-icons" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BYCAmbulance
