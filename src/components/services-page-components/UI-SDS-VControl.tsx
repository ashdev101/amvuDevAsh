import "../../styles/services-page-styles/UI-SDS-VControl.css"
import { AppStore, GooglePlay } from "../../utils/footerUtils"
import { ScreenWithFrame } from "../../utils/services-utils/images"
import { UiSdsVControl } from "../../utils/services-utils/servicesUtils"
const UISDSVControl = () => {
    return (
        <div className='md:mt-[100px] mt-[50px] w-full p-[5%]'>
            <div className="UI-SDS-VControl-Box">

                {/* Left Side Content */}
                <div className="UI-SDS-VControl-left-side-div">
                    <div className="flex flex-col justify-center items-center w-full absolute xl:top-[-15%] top-[-5%]">
                        <img src={ScreenWithFrame} alt="Mobile App" className="2xl:w-[456px] xl:w-[400px] lg:w-[350px] sm:w-[250px] w-[40%]" />
                        <div className="flex gap-[10px] mt-[30px]">
                            <img src={GooglePlay} alt="GooglePlay" className="UI-SDS-VControl-google-app-store-icon" />
                            <img src={AppStore} alt="AppStore" className="UI-SDS-VControl-google-app-store-icon" />
                        </div>
                    </div>
                </div>

                {/* Right Side Content */}
                <div className="UI-SDS-VControl-right-side-div">

                    {
                        UiSdsVControl.length && UiSdsVControl.map((item, index) => (
                            <div className="flex flex-col gap-[15px] mt-[30px]" key={index}>
                                <div className="UI-SDS-VControl-right-side-icon-div" style={{ backgroundColor: item.iconBg }}>
                                    <img src={item.icon} alt="User Interactive" className="w-[70%] h-[70%]" />
                                </div>
                                <h2 className="UI-SDS-VControl-right-side-h2">{item.heading}</h2>
                                <p className="UI-SDS-VControl-right-side-p">{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default UISDSVControl
