import { useInView } from "react-intersection-observer"
import "../../styles/home-styles/services.css"
import { doctorsServices, services } from "../../utils/home-utils/homeUtils"
import { DoctorIcon, Vector } from "../../utils/home-utils/images"
import clsx from "clsx"
import H2 from "./components/H2"
const Services = () => {
    const { ref: rightRef, inView: rightInView } = useInView()
    const { ref: leftRef, inView: leftInView } = useInView()
    return (
        <div className="w-full lg:mt-[100px] mt-[80px]">
            <H2 text="Services" />
            <div className="w-full flex 2xl:flex-row flex-col  h-[657px] mt-[40px]">

                {/* Servise Component left side */}
                <div className={clsx("services-left-side-div", leftInView ? "zoom-in" : "animate-fadeout")} ref={leftRef}>

                    {/* Services Box */}
                    <div className="services-box" >
                        {/* services */}
                        <div className=" flex flex-col gap-[30px] mt-[20px] ml-[20px]">
                            {
                                services && services.map((service, index) => (
                                    <div key={index} className="flex md:gap-[30px] gap-[10px] justify-start items-center">
                                        <div style={{ backgroundColor: service.bg }} className="rounded-full md:w-[50px] w-[35px] md:h-[50px] h-[35px] flex justify-center items-center">
                                            <img src={service.image} alt="image" className="md:w-[41px] w-[35px] md:h-[38px] h-[30px] p-[5px]" />
                                        </div>
                                        <p className="font-[500] md:text-[16px] text-[12px] ">{service.serviceName}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <img src={DoctorIcon} alt="doctor-icon" className=" absolute  bottom-0 lg:right-0  right-[10%] md:w-[155px] sm:w-[145px] w-[140px] h-[207]  z-20" />
                    </div>

                    {/* Doctor Services */}
                    {
                        doctorsServices && doctorsServices.map((service, index) => (
                            <div className={service.className} key={index}>
                                <img src={service.image} alt={service.serviceName} className="lg:w-[63px] w-[33px] lg:h-[70px] h-[35px]" />
                                <p style={{ color: service.textColor }} className="font-[500] lg:text-[16px] md:text-[13px] sm:text-[12px] text-[10px]">{service.serviceName}</p>
                            </div>
                        ))
                    }

                    {/* vector iamge */}
                    <img src={Vector} alt="vector" className=" absolute w-[409.26px] h-[420.73px] top-[100px] md:left-[170px] right-[-50px]  -z-0" />
                    {/* vector end bullets */}
                    <div className="bullet-end top-[95px]  md:left-[565px] right-[-47px]"></div>
                    <div className="bullet-end top-[378px] md:left-[572px] right-[-43px]"></div>
                    <div className="bullet-end top-[514px] md:left-[167px] left-[46px]"></div>
                    <div className=" absolute rounded-full w-[13px] h-[13px] bg-[#5F94FC] top-[220px] md:left-[565px] right-[-50px] "></div>
                </div>


                {/* Servise Component right side  */}
                <div className={clsx("services-right-side-div", rightInView ? "animate-fadein" : "animate-fadeout")} ref={rightRef}>
                    <div className="2xl:w-[484.08px] lg:w-[80%] w-[100%]  mt-[20px] mr-[15px]">
                        <h3 className=" w-full  text-[#DC1F27] font-[700] 2xl:text-[39px] md:text-[30px] ml-[15px] text-[22px] md:leading-[55px] leading-[30px]">
                            Your Wellness, Our Priority: Streamlined Solutions for Modern Healthcare
                        </h3>
                        <p className=" text-justify 2xl:w-[472.08px] w-[80%]  text-[14px] font-[400] leading-[20px] ml-[15px] mt-[25px] text-[#425066]">
                            With the advent of telemedicine, you can now consult doctors from the comfort of your home. This convenient and accessible approach to healthcare allows you to receive medical advice, prescriptions, and even treatment recommendations without the need for in-person visits. It's a game-changer in healthcare, offering convenience and safety.
                        </p>
                    </div>
                    <div className="md:mt-[50px] mt-[25px]  ml-[20px]">
                        <a href="" className="btn">Explore</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
