import clsx from 'clsx'
import React from 'react'
import { useInView } from 'react-intersection-observer'
interface H2CampusProps {
    text: string
}
const H2Campus: React.FC<H2CampusProps> = ({ text }) => {
    const { ref: refH, inView: hInView } = useInView()
    return (
        <h2 className={clsx('campus-all-headings', hInView ? "h1-in" : "animate-fadeout")} ref={refH}>{text}</h2>
    )
}

export default H2Campus
