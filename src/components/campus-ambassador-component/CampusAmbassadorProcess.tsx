import { useInView } from "react-intersection-observer";
import "../../styles/campus-ambassador-styles/campusAmbassadorProcess.css"
import { ApplicationDate, Process } from "../../utils/campus-utils/campusUtils"
import H2Campus from "./components/H2-Campus";
import ProcessCard from "./components/ProcessCard"
import { format } from "date-fns";
import clsx from "clsx";

const CampusAmbassadorProcess = () => {
    const { ref, inView } = useInView()
    return (
        <div className='mt-[30px]'>
            <H2Campus text="Process" />

            <div className="process-card-container">
                <div className={clsx("process-card", inView ? "animate-card-in" : "animate-fadeout")} ref={ref}>
                    <p className="font-[700] text-[#1B2534] 2xl:text-[20px] xl:text-[19px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px]">Application Date</p>
                    {
                        ApplicationDate && ApplicationDate.map((date, index) => (
                            <div key={index} className="mt-[10%] flex flex-col items-start w-[70%]">
                                <p className="xl:text-[16px] lg:text-[14px] md:text-[12px] text-[10px]">{date.application}:</p>
                                <p className="xl:text-[25px] lg:text-[22px] md:text-[20px] sm:text-[18px] text-[16px] text-[#595858] font-[500]">{format(date.date, "dd MMM yyyy",)}</p>
                            </div>
                        ))
                    }
                </div>
                {
                    Process.length && Process.map((process, index) => (
                        <ProcessCard
                            key={index}
                            image={process.image}
                            text={process.text}
                            href={process.href}
                            linkText={process.linkText}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default CampusAmbassadorProcess
