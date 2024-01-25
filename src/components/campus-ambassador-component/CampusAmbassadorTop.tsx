import { useInView } from "react-intersection-observer";
import "../../styles/campus-ambassador-styles/campusAmbassadorTop.css"
import { JoinUsDashboard, Widget01, Widget02 } from "../../utils/campus-utils/images";
import clsx from "clsx";

const CampusAmbassadorTop = () => {
    const { ref, inView } = useInView()
    return (
        <div className={clsx("2xl:h-[830px] xl:h-[820px] lg:h-[780px] md:h-[720px] sm:h-[580px] h-[500px]", inView ? "animate-fadeup" : "animate-fadeout")} ref={ref}>
            <div className="campus-main-container">
                {/*          <img src={RectangleCorner01} className=" absolute top-0 left-0 mix-blend-screen w-[50%]" /> */}
                <h2 className="campus-top-h2">Campus Ambassador</h2>
                <p className="campus-top-para-blue">Be the Face of Your Campus</p>
                <div className="campus-marquee">
                    <p className="campus-top-para-red">
                        On the canvas of campus, paint stories untold,
                        Be an ambassador, let your spirit unfold.
                        We seek the ambitious, the daring and bold,
                        To join our family, in adventure untold.
                        Join Us as a Campus Ambassador!

                    </p>
                </div>
                <img src={JoinUsDashboard} className="campus-top-dashboard-image" />
                <img src={Widget01} className="campus-top-widget-one-image" />
                <img src={Widget02} className="campus-top-widget-two-image" />
            </div>
        </div>
    )
}
export default CampusAmbassadorTop
