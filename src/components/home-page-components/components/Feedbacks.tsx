import { customerFeedback } from "../../../utils/home-utils/homeUtils"
import FeedbackCard from "./FeedbackCard"
import "../../../styles/home-styles/feedbacks.css"


const Feedbacks = () => {
    return (
        <div className="lg:mt-[100px] md:mt-[30px] sm:mt-[50px] mt-[70px] flex flex-col">
            <h1 className="all-home-components-heading-h1">Customer Feedback</h1>

            <div className="mentors-card-container" style={{ marginTop: "50px" }}>
                {
                    customerFeedback.length && customerFeedback.map((feedback, index) => (
                        <FeedbackCard
                            key={index}
                            name={feedback.name}
                            image={feedback.image}
                            comment={feedback.comment}
                            rating={feedback.rating}
                            postDesignation={feedback.postDesignation}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default Feedbacks
