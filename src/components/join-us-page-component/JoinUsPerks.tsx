import "../../styles/join-us-styles/joinUsPerks.css"
import { Perks } from "../../utils/join-us-utils/joinUsUtils"
import PerksCard from "./components/PerksCard"
const JoinUsPerks = () => {
    return (
        <div className='mt-[30px]'>
            <h2 className='join-us-all-headings'>
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

export default JoinUsPerks
