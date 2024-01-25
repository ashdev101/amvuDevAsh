import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import "../../../styles/about-styles/teamCard.css";
import { ImageFrame01 } from '../../../utils/about-utils/images';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';
interface TeamCardProps {
    image: string,
    imageFrame?: string,
    name: string,
    title: string,
    about: string,
    linkedin?: string,
    mail?: string
}

const TeamCard: React.FC<TeamCardProps> = ({ image, imageFrame = ImageFrame01, name, title, about, mail = "", linkedin = "" }) => {
    const { ref: cardRef, inView: cardInView } = useInView()
    return (
        <div className={clsx("team-card", cardInView ? "animate-card-in" : "animate-fadeout")} ref={cardRef}>
            <div className="w-[60%] h-[50%] relative">
                <img src={image} alt="" className="team-member-image" />
                <img src={imageFrame} alt="" className="team-member-image-frame" />
            </div>
            <p className="team-member-name">
                {name}
            </p>
            <p className='team-member-title hideScrollbar'>
                {title}
            </p>
            <p className="team-member-about hideScrollbar ">
                {about}
            </p>
            <div className="team-member-social-div" >
                <a href={linkedin} className="team-member-social-link"><CiLinkedin /></a>
                <a href={mail} className="team-member-social-link"><MdOutlineMailOutline /></a>
            </div>
        </div>
    )
}

export default TeamCard
