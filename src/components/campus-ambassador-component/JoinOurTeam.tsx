import { ApplyNow } from "../../utils/campus-utils/images"
import "../../styles/campus-ambassador-styles/joinOurTeam.css"
const JoinOurTeam = () => {
    return (
        <div className='mt-[30px] mb-[40px]'>
            <h2 className='campus-all-headings'>Join Our Team as Intern</h2>
            <div className="flex justify-center items-center mt-[30px]">
                <a href="" className="join-our-team-link">
                    <img src={ApplyNow} className="lg:w-[90px] md:w-[70px] w-[50px] lg:h-[90px] md:h-[70px] h-[50px]  mr-[10%]" alt="Apply Now" />
                    <span className="mr-[7%]">Apply Now</span> </a>
            </div>
        </div>
    )
}

export default JoinOurTeam
