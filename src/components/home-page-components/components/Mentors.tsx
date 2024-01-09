import { ourMentors } from "../../../utils/home-utils/homeUtils"
import MentorCard from "./MentorCard"
import "../../../styles/home-styles/mentors.css"
const Mentors = () => {
    return (
        <div className="relative flex flex-col">
            <h1 className="all-home-components-heading-h1">Our Mentors</h1>

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
