import "../../styles/about-styles/aboutPageTop.css"
import { AboutUsTopImage, AtKIET, MessageBox, MessageProfile, Progress90Per, Star } from "../../utils/about-utils/images"
const AboutPageTop = () => {
    return (
        <div className="w-full flex justify-center items-center mt-[2%] relative">
            <img src={AboutUsTopImage} className="2xl:w-[100%] w-[90%]" />
            <div className="discover-more">
                Discover More
            </div>
            <div className="at-kiet">
                <img src={AtKIET} className="at-kiet-image" />
                <p className="at-kiet-text">At KIET</p>
            </div>
            <div className="arriving-soon">
                <img src={Progress90Per} className="arriving-soon-image" />
                <p className="at-kiet-text">Arriving Soon</p>
            </div>

            {/* Message Box */}
            <div className="message-box-div">
                <div className="message-box-div-inner">
                    <img src={MessageBox} className="message-box z-[10] absolute" />
                    <div className="z-[20] absolute w-full flex flex-col justify-between">
                        <div className="flex justify-between mx-[10%] mt-[5%]">
                            <div>
                                <img src={MessageProfile} />
                            </div>
                            <div className="flex flex-col gap-[3px] justify-center items-center">
                                <p className="text-white">Excellent</p>
                                <div className=" lg:flex hidden  gap-[4px]">
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex hidden items-center xl:mt-[10%] lg:mt-[7%] justify-between mx-[6%]">
                            <p className="text-white 2xl:text-[16px] xl:text-[15px] lg:text-[13px]  font-[100]">
                                Thank you for helping.
                            </p>
                            <p className=" bg-[#FFCA1D] rounded-md px-2 py-1 2xl:text-[16px] xl:text-[15px] lg:text-[13px] ">
                                Message
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AboutPageTop
