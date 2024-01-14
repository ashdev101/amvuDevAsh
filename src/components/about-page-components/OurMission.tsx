import "../../styles/about-styles/ourMission.css"
import { Ambulance, BulbWithTwoPersonIcons, BusinessPresentation, FastCharging, Hospital, Meeting, Patient } from "../../utils/about-utils/images"
import { DoctorIcon } from "../../utils/home-utils/images"
const OurMission = () => {
    return (
        <div className="flex mt-[50px]" >

            <div className="flex-1 md:flex hidden justify-center items-center">

                {/* Ellipse Ring 01 > Ellipse Ring 02 > Ellispe Ring 03 */}
                {/* Ellispe Ring First */}
                <div className="our-mission-ellipse-ring-first">
                    <div className="our-mission-patient-image-div">
                        <img src={Patient} alt="" className="w-[100%]" />
                    </div>
                    <div className="our-mission-ambulance-image-div">
                        <img src={Ambulance} alt="" className="w-[80%]" />
                    </div>
                    <div className="our-mission-blue-dot" />
                    <div className="our-mission-light-blue-dot" />
                    <div className="our-mission-pink-dot" />
                    <div className="our-mission-orange-dot" />
                    <div className="our-mission-yellow-dot" />
                    <div className="our-mission-green-dot" />
                    <div className="our-mission-fastest">
                        <img src={FastCharging} alt="" className="w-[40%] h-[40%]" />
                        <p className="text-[#2F4BDF] xl:text-[19px] lg:text-[16px] md:text-[14px] font-[500]">Fastest</p>
                    </div>

                    {/* Ellispe Ring Second */}
                    <div className="our-mission-ellipse-ring-second">
                        <div className="our-mission-bulb-with-two-personIcons-image-div-first">
                            <img src={BulbWithTwoPersonIcons} alt="" className="w-[80%]" />
                        </div>
                        <div className="our-mission-bulb-with-two-personIcons-image-div-second">
                            <img src={BulbWithTwoPersonIcons} alt="" className="w-[80%]" />
                        </div>
                        <div className="our-mission-business-presentation-image-div">
                            <img src={BusinessPresentation} alt="" className="w-[80%]" />
                        </div>

                        {/* Ellispe Ring Third */}
                        <div className="our-mission-ellipse-ring-third">
                            <div className="our-mission-meeting-image-div">
                                <img src={Meeting} alt="" className="w-[80%]" />
                            </div>
                            <div className="our-mission-hospital-image-div">
                                <img src={Hospital} alt="" className="w-[80%]" />
                            </div>
                            <img src={DoctorIcon} alt="" className="our-mission-doctor-icon" />
                        </div>
                    </div>
                </div>


            </div>

            {/* Our Mission */}
            <div className="flex-1 flex flex-col justify-center md:items-start items-center 2xl:pl-[100px] xl:pl-[100px] lg:pl-[40px] md:pl-0">
                <h3 className="xl:text-[38px] lg:text-[28px] md:text-[25px] sm:text-[20px] text-[15px] text-[#6B6868] font-[600]">
                    Our Mission
                </h3>
                <p className="font-[400] xl:text-[16px] lg:text-[14px] md:text-[13px] text-[12px] text-[#575757] xl:leading-[38px] lg:leading-[27px] md:leading-[24px]  xl:w-[548px] lg:w-[450px] md:w-full sm:w-[70%] w-[80%] xl:h-[304px] text-justify mt-[10px] lg:pr-0 md:pr-[40px] pr-0 ">
                    As a dedicated team of individuals who deeply care about your precious time and the well-being of your loved ones, we intimately understand the distress that ensues from the untimely response of hospitals and ambulances during critical junctures. Our mission revolves around reshaping the perception of medical facilities in India, replacing fear with assurance. We aim to imbue our fellow citizens with a renewed sense of security, trusting in a healthcare system that values both time and lives
                </p>
            </div>
        </div>
    )
}

export default OurMission
