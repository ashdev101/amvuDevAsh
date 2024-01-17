import CampusAmbassadorAbout from "../components/campus-ambassador-component/CampusAmbassadorAbout";
import CampusAmbassadorPerks from "../components/campus-ambassador-component/CampusAmbassadorPerks";
import CampusAmbassadorProcess from "../components/campus-ambassador-component/CampusAmbassadorProcess";
import CampusAmbassadorTop from "../components/campus-ambassador-component/CampusAmbassadorTop";
import JoinOurTeam from "../components/campus-ambassador-component/JoinOurTeam";
import "../styles/campus-ambassador-styles/CampusAmbassador.css";

const CampusAmbassador = () => {
    return (
        <div>
            <CampusAmbassadorTop />
            <CampusAmbassadorAbout />
            <CampusAmbassadorProcess />
            <CampusAmbassadorPerks />
            <JoinOurTeam />
        </div>
    )
}

export default CampusAmbassador
