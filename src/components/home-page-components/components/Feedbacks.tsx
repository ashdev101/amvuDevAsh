import { customerFeedback } from "../../../utils/home-utils/homeUtils"
import FeedbackCard from "./FeedbackCard"
import "../../../styles/home-styles/feedbacks.css"
import H2 from "./H2"


const Feedbacks = () => {
    return (
        <div className="lg:mt-[100px] md:mt-[30px] sm:mt-[50px] mt-[70px] flex flex-col">
            <H2 text="Customer Feedback" />

            <div className="feedback-card-container hideScrollbar" style={{ marginTop: "50px" }}>
                {
                    customerFeedback.length && customerFeedback.map((feedback, index) => (
                        <FeedbackCard
                            key={index}
                            name={feedback.name}
                            image={feedback.image}
                            comment={feedback.comment}
                            rating={feedback.rating}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Feedbacks
