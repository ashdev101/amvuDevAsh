import "../../styles/campus-ambassador-styles/campusAmbassadorPerks.css"
import { Perks } from "../../utils/campus-utils/campusUtils"
import PerksCard from "./components/PerksCard";

const CampusAmbassadorPerks = () => {
    return (
        <div className='mt-[30px]'>
            <h2 className='campus-all-headings'>
                Perks
            </h2>
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
