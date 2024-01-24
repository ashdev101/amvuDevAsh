import { Patient1, Patient2, PatientOnBike, Traffic, Vactor3, Vactor4 } from "../../utils/home-utils/images"
import "../../styles/home-styles/whyWeNeedAmbuvians.css";
import { useInView } from "react-intersection-observer";
import H2 from "./components/H2";
import clsx from "clsx";

const WhyWeNeedAmbuvians = () => {
    const { ref, inView } = useInView()
    const { ref: imgRef, inView: imgInView } = useInView()
    return (
        <div className="w-full relative lg:mt-[100px] sm:mt-[90px] mt-[60px]" ref={ref}>
            <H2 text="Why We Need Ambuvians" />

            <div className="flex flex-col xl:mt-[120px] mt-[10px] xl:h-full h-[700px] relative">

                {/* top content div */}
                <div className="flex xl:flex-row flex-col-reverse justify-evenly">
                    <div className={"h-full flex justify-between items-baseline 2xl:w-[38%] xl:w-[44%] w-[38%]"} ref={imgRef}>
                        <img src={Traffic} alt="traffic" className={clsx("whyWeNeedAmbuvians-traffic-image", imgInView ? "image-in-view" : "animate-fadeout")} />
                        <img src={Patient1} alt="patient" className={clsx("whyWeNeedAmbuvians-patient1-image", imgInView ? "image-in-view" : "animate-fadeout")} />
                    </div>
                    <div className={clsx("lg:w-[610px] h-[300px]", inView ? "animate-fadein" : "animate-fadeout")}>
                        <h3 className="lg:w-full md:w-[50%] py-[20px] w-[70%] md:h-[128px] font-[700] text-[#DC1F27] xl:ml-0 sm:ml-[10%] ml-[4%] xl:text-[39px] md:text-[30px] text-[22px] md:leading-[55px] leading-[30px]">
                            Ambuvians is on a mission to address these problems
                        </h3>
                        <p className="xl:static absolute right-[10%] lg:w-[463px] sm:w-[350px] w-[200px] h-[160px] font-[400] lg:text-[18px] md:text-[16px] text-[12px]  text-[#868686] md:leading-[31.5px] text-justify">
                            Ambuvians is on a mission to address a wide range of problems, with the ultimate goal of making quality healthcare solutions accessible to everyone. We're here to simplify the complex and ensure healthcare is within reach for all.
                        </p>
                    </div>
                </div>

                {/* bottom content div */}
                <div className={clsx("flex justify-evenly mt-[50px] 2xl:w-[80%] xl:w-[90%] w-[80%] m-auto")}>
                    <img src={PatientOnBike} alt="patient" className={clsx("whyWeNeedAmbuvians-patientOnBike-image", imgInView ? "image-in-view" : "animate-fadeout")} />
                    <img src={Patient2} alt="patient" className={clsx("whyWeNeedAmbuvians-patient2-image", imgInView ? "image-in-view" : "animate-fadeout")} />
                </div>
            </div>

            {/* Vactors */}
            <div>
                <img src={Vactor3} className={clsx("whyWeNeedAmbuvians-vactor3", inView ? "animate-vactor-one" : "animate-fadeout")} />
                <img src={Vactor4} className={clsx("whyWeNeedAmbuvians-vactor4", inView ? "animate-vactor-two" : "animate-fadeout")} />
            </div>

        </div>
    )
}

export default WhyWeNeedAmbuvians
