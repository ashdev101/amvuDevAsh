import "../../../styles/services-page-styles/WHTBookGPAS.css";
import { AppStore, GooglePlay } from "../../../utils/footerUtils";

const WHTBookGPAS = () => {
    return (
        <div className="WHTBook-GPAS-main-container">

            {/* Right Side Box */}
            <div className="WHTBook-right-side-box">
                <h3 className="WHTBook-right-side-box-h3">Schedule your ambulance ride right away because at Ambuvians, we prioritize saving lives.</h3>
                <div className="WHTBook-box">
                    <p className="WHTBook-box-p">Watch How To Book</p>
                    <a href="" className="WHTBook-box-watch">Watch</a>
                </div>
            </div>

            {/* Left Side Box */}
            <div className="WHTBook-left-side-box">
                <div className=" flex justify-center items-center w-full h-[50%] xl:gap-[30px] md:gap-[10px] gap-[5%]">
                    <img src={GooglePlay} alt="Google Play" className="WHTBook-google-play-app-store-image" />
                    <img src={AppStore} alt="App Store" className="WHTBook-google-play-app-store-image" />
                </div>
                <div className="flex justify-center items-center">
                    <a href="" className="WHTBook-box-download">Download</a>
                </div>
            </div>
        </div>
    )
}

export default WHTBookGPAS
