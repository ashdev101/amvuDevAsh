import { Patient1, Patient2, PatientOnBike, Traffic, Vactor3, Vactor4 } from "../../utils/home-utils/images"
import "../../styles/home-styles/whyWeNeedAmbuvians.css"
const WhyWeNeedAmbuvians = () => {
    return (
        <div className="w-full relative lg:mt-[150px] mt-[100px]">
            <h2 className="all-home-components-heading-h1">Why We Need Ambuvians</h2>

            <div className="flex flex-col xl:mt-[120px] mt-[50px] xl:h-full h-[700px] relative">

                {/* top content div */}
                <div className="flex xl:flex-row flex-col-reverse justify-evenly">
                    <div className="h-full flex justify-between items-baseline w-[38%]">
                        <img src={Traffic} alt="traffic" className="whyWeNeedAmbuvians-traffic-image" />
                        <img src={Patient1} alt="patient" className="whyWeNeedAmbuvians-patient1-image" />
                    </div>
                    <div className="lg:w-[610px] h-[300px] ">
                        <h1 className="lg:w-full w-[50%] h-[128px] font-[700] text-[#DC1F27] xl:text-[45px] lg:text-[38px] md:text-[30px] sm:text-[27px] text-[25px] xl:ml-0 sm:ml-[10%] ml-[4%]">
                            Ambuvians is on a mission to address these problems
                        </h1>
                        <p className="xl:static absolute right-[10%] lg:w-[463px] sm:w-[350px] w-[200px] h-[160px] font-[400] lg:text-[18px] md:text-[16px] text-[12px]  text-[#868686] md:leading-[31.5px] text-justify">
                            Ambuvians is on a mission to address a wide range of problems, with the ultimate goal of making quality healthcare solutions accessible to everyone. We're here to simplify the complex and ensure healthcare is within reach for all.
                        </p>
                    </div>
                </div>

                {/* bottom content div */}
                <div className="flex justify-evenly mt-[50px] w-[80%] m-auto">
                    <img src={PatientOnBike} alt="patient" className="whyWeNeedAmbuvians-patientOnBike-image" />
                    <img src={Patient2} alt="patient" className="whyWeNeedAmbuvians-patient2-image" />
                </div>
            </div>

            {/* Vactors */}
            <div>
                <img src={Vactor3} className="whyWeNeedAmbuvians-vactor3" />
                <img src={Vactor4} className="whyWeNeedAmbuvians-vactor4" />
            </div>

        </div>
    )
}

export default WhyWeNeedAmbuvians
