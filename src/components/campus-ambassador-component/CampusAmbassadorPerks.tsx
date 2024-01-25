import "../../styles/campus-ambassador-styles/campusAmbassadorPerks.css"
import { Perks } from "../../utils/campus-utils/campusUtils"
import H2Campus from "./components/H2-Campus";
import PerksCard from "./components/PerksCard";

const CampusAmbassadorPerks = () => {
    return (
        <div className='mt-[30px]'>
            <H2Campus text="Perks" />
            <div className="perks-card-container">
                {
                    Perks.length && Perks.map((perk, index) => (
                        <PerksCard
                            key={index}
                            image={perk.image}
                            text={perk.perk}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default CampusAmbassadorPerks
