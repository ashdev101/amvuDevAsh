import AboutPageTop from "../components/about-page-components/AboutPageTop"
import MeetOurTeam from "../components/about-page-components/MeetOurTeam"
import OurMission from "../components/about-page-components/OurMission"

const About = () => {
    return (
        <div className="min-h-[60vh]">
            <AboutPageTop />
            <OurMission />
            <MeetOurTeam />
        </div>
    )
}

export default About
