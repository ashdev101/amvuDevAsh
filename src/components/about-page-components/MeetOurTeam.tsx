import "../../styles/about-styles/meetOutTeam.css"
import { OurTeam } from "../../utils/about-utils/aboutUtils"
import TeamCard from "./components/TeamCard";

const MeetOurTeam = () => {

    const firstMember = OurTeam[0]
    const resMembers = OurTeam.filter((member: any) => member !== OurTeam[0])

    return (
        <div className="md:mt-[30px] mt-[50px]">
            {/* Heading */}
            <div className="flex flex-col justify-center items-center">
                <span className="uppercase xl:text-[16px] md:text-[14px] sm:text-[13px] text-[12px] font-[600]">Who We Are</span>
                <h2 className="xl:text-[64px] lg:text-[55px] md:text-[50px] sm:text-[40px] text-[30px] text-[#282828] font-[600]">
                    Meet Our Team
                </h2>
            </div>

            {/* Team */}
            <div className="flex flex-col justify-center items-center mt-[20px]">
                {/* First Member */}
                {
                    <TeamCard image={firstMember.image} imageFrame={firstMember.imageFrame && firstMember.imageFrame} name={firstMember.name} title={firstMember.title} about={firstMember.about} linkedin={firstMember.linkedin && firstMember.linkedin} twitter={firstMember.twitter && firstMember.twitter} mail={firstMember.twitter && firstMember.twitter} />
                }

                {/* Rest Members */}
                <div className="team-card-container">
                    {
                        resMembers.length && resMembers.map((member, index) => (
                            <TeamCard key={index} image={member.image} imageFrame={member.imageFrame && member.imageFrame} name={member.name} title={member.title} about={member.about} linkedin={member.linkedin && member.linkedin} twitter={member.twitter && member.twitter} mail={member.twitter && member.twitter} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MeetOurTeam
