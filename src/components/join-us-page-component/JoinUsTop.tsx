import "../../styles/join-us-styles/joinUsTop.css"
import { JoinUsDashboard, RectangleCorner01, Widget01, Widget02 } from "../../utils/join-us-utils/images"
const JoinUsTop = () => {
    return (
        <div className="2xl:h-[830px] xl:h-[820px] lg:h-[780px] md:h-[720px] sm:h-[580px] h-[500px]">
            <div className="join-us-top-container">
                <img src={RectangleCorner01} className=" absolute top-0 left-0 mix-blend-screen w-[50%]" />
                <h2 className="join-us-top-h2">Campus Ambassador</h2>
                <p className="join-us-top-para-blue">Be the Face of Your Campus</p>
                <p className="join-us-top-para-red">On the canvas of campus, paint stories untold.</p>
                <img src={JoinUsDashboard} className="join-us-top-dashboard-image" />
                <img src={Widget01} className="join-us-top-widget-one-image" />
                <img src={Widget02} className="join-us-top-widget-two-image" />
            </div>
        </div>
    )
}

export default JoinUsTop
 