import React from 'react'
import "../../../styles/home-styles/home.css"
import { useInView } from 'react-intersection-observer'
import clsx from 'clsx'
interface H2PropsTypes {
    text: string
}
const H2: React.FC<H2PropsTypes> = ({ text }) => {
    const { ref, inView } = useInView()
    return (
        <h2 ref={ref}
            className={clsx("all-home-components-heading-h1", inView && "h1-in")}
        >{text}
        </h2>
    )
}

export default H2
