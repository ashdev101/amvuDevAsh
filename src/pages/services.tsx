import clsx from "clsx"
import FAService from "../components/services-page-components/FAService"
import SUFStorage from "../components/services-page-components/SUFStorage"
import ServicesTop from "../components/services-page-components/ServicesTop"
import StatisitcsService from "../components/services-page-components/StatisitcsService"
import UISDSVControl from "../components/services-page-components/UI-SDS-VControl"
import "../styles/services-page-styles/services.css"
import { BottomImage } from "../utils/services-utils/images"
import { useInView } from "react-intersection-observer"

const ServicesPage = () => {
    const { ref, inView } = useInView()
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

            <div className={clsx("services-bottom-div", inView ? "animate-fadedown" : "animate-fadeout")} ref={ref}>
                <div className=" absolute 2xl:bottom-[13%] xl:bottom-[10%] lg:bottom-[8%] md:bottom-[6%] bottom-[5%] left-[5%]">
                    <h2 className="services-bottom-div-h2">
                        Ambuvians <br /> <span className="text-[#B7B5B5]">Healthcare</span>
                    </h2>
                    <p className="services-bottom-div-p">ambuvians.in</p>
                </div>
                <div className="relative h-full">
                    <img src={BottomImage} alt="image" className="sbi-images" />
                </div>
            </div>
        </div>
    )
}

export default ServicesPage
