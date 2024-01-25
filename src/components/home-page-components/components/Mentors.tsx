import "../../../styles/home-styles/mentors.css"
import { ourMentors } from "../../../utils/home-utils/homeUtils"
import H2 from "./H2"
import MentorCard from "./MentorCard"
const Mentors = () => {
  
    return (
        <div className="relative flex flex-col">
            <H2 text="Our Mentors" />

            <div className="mentors-card-container">
                {
                    ourMentors.length && ourMentors.map((mentor, index) => (
                        <MentorCard
                            key={index}
                            image={mentor.image}
                            name={mentor.name}
                            experience={mentor.experience}
                            about={mentor.about}
                            socialMediaLinks={mentor.socialMediaLinks}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Mentors
