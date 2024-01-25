import clsx from "clsx"
import { useInView } from "react-intersection-observer"
import H2Campus from "./components/H2-Campus"

const CampusAmbassadorAbout = () => {
    const { ref: refP, inView: pInView } = useInView()

    return (
        <div className='mt-[30px]'>
            <H2Campus text="About" />
            <p className={clsx('text-justify w-[90%] m-auto  font-[400] mt-[20px] xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]', pInView ? "animate-fadein" : "animate-fadeout")} ref={refP}>
                For students wanting hands-on experience and a chance to make a difference, becoming an Ambuvians Campus Ambassador sounds amazing. You may represent a dynamic organization on campus as an Ambuvian, connecting with students and promoting our projects, goods, and services.
                Campus Ambassadors organize events, workshops, and seminars, use social media to generate buzz, and build a community that shares Ambuvians' beliefs. This role lets you improve your leadership, communication, and networking abilities while working with a mission-driven team.
                As a Campus Ambassador, you can create a professional network, learn marketing and outreach tactics, and possibly find a job.
                It's about embodying Ambuvians' spirit, sharing their passion, and motivating others to join a meaningful movement or cause. It allows one to grow personally and professionally while contributing to something greater.
            </p>
        </div>
    )
}

export default CampusAmbassadorAbout
