import { Rectangle } from "../../utils/home-utils/images"
import Feedbacks from "./components/Feedbacks"
import Mentors from "./components/Mentors"
import Partners from "./components/Partners"

const MentorsPartnersFeedback = () => {
    return (
        <div className=" relative w-full md:mt-[120px] sm:mt-[0px] mt-[-180px]">
            <Mentors />
            <Partners />
            <Feedbacks />

            {/* Background Rectangle Image */}
            <img src={Rectangle} className="w-full h-[1937px] md:flex hidden absolute top-[100px] left-0 z-0" />
            <div className=" absolute w-[62.68px] h-[63.13px] bg-white opacity-40 rounded-full top-[720px] right-[600px]"></div>
        </div>
    )
}

export default MentorsPartnersFeedback
 