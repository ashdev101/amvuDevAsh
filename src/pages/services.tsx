import FAService from "../components/services-page-components/FAService"
import SUFStorage from "../components/services-page-components/SUFStorage"
import ServicesTop from "../components/services-page-components/ServicesTop"
import StatisitcsService from "../components/services-page-components/StatisitcsService"
import UISDSVControl from "../components/services-page-components/UI-SDS-VControl"
import "../styles/services-page-styles/services.css"
import { BottomImageEight, BottomImageFive, BottomImageFour, BottomImageOne, BottomImageSeven, BottomImageSix, BottomImageThree, BottomImageTwo } from "../utils/services-utils/images"

const ServicesPage = () => {

    return (
        <div className="bg-[#F6F6F6]">
            <ServicesTop />

            {/* Fastest Ambulance Service */}
            <FAService />

            {/* Secure User Friendly Storage */}
            <SUFStorage />

            {/* User Interactive, Secure Document Storage */}
            <UISDSVControl />

            {/* Medical Centers, Professional Doctors, Customers*/}
            <StatisitcsService />

            <div className="services-bottom-div">
                <div className=" absolute 2xl:bottom-[13%] xl:bottom-[10%] lg:bottom-[8%] md:bottom-[6%] bottom-[5%] left-[5%]">
                    <h2 className="services-bottom-div-h2">
                        Ambuvians <br /> <span className="text-[#B7B5B5]">Healthcare</span>
                    </h2>
                    <p className="services-bottom-div-p">ambuvians.in</p>
                </div>
                <div className="relative h-full">
                    <img src={BottomImageOne} alt="image" className="sbi-one sbi-images" />
                    <img src={BottomImageTwo} alt="image" className="sbi-two sbi-images" />
                    <img src={BottomImageThree} alt="image" className="sbi-three sbi-images" />
                    <img src={BottomImageFour} alt="image" className="sbi-four sbi-images" />
                    <img src={BottomImageFive} alt="image" className="sbi-five sbi-images" />
                    <img src={BottomImageSix} alt="image" className="sbi-six sbi-images" />
                    <img src={BottomImageSeven} alt="image" className="sbi-seven sbi-images" />
                    <img src={BottomImageEight} alt="image" className="sbi-eight sbi-images" />
                </div>
            </div>
        </div>
    )
}

export default ServicesPage
