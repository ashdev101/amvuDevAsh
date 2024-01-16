import JoinOurTeam from '../components/join-us-page-component/JoinOurTeam';
import JoinUsAbout from '../components/join-us-page-component/JoinUsAbout';
import JoinUsPerks from '../components/join-us-page-component/JoinUsPerks';
import JoinUsProcess from '../components/join-us-page-component/JoinUsProcess';
import JoinUsTop from '../components/join-us-page-component/JoinUsTop';
import "../styles/join-us-styles/joinUs.css";

const JoinUs = () => {
    return (
        <div>
            <JoinUsTop />
            <JoinUsAbout />
            <JoinUsProcess />
            <JoinUsPerks />
            <JoinOurTeam />
        </div>
    )
}

export default JoinUs
