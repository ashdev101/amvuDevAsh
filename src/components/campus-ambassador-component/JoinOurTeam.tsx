import { ApplyNow } from "../../utils/campus-utils/images"
import "../../styles/campus-ambassador-styles/joinOurTeam.css"
import H2Campus from "./components/H2-Campus"
import { useInView } from "react-intersection-observer"
import clsx from "clsx"
const JoinOurTeam = () => {
    const { ref, inView } = useInView()
    return (
        <div className='mt-[30px] mb-[40px]'>
            <H2Campus text="Join Our Team as Intern" />
            <div className="flex justify-center items-center mt-[30px]">
                <a href="" className={clsx("join-our-team-link", inView ? "zoom-in" : "animate-fadeout")} ref={ref}>
                    <img src={ApplyNow} className="lg:w-[90px] md:w-[70px] w-[50px] lg:h-[90px] md:h-[70px] h-[50px]  mr-[10%]" alt="Apply Now" />
                    <span className="mr-[7%]">Apply Now</span>
                </a>
            </div>
        </div>
    )
}

export default JoinOurTeam
