import React from 'react'
import "../../../styles/home-styles/home.css"
interface H2PropsTypes {
    text: string
}
const H2: React.FC<H2PropsTypes> = ({ text }) => {
    return (
        <h2
            className="all-home-components-heading-h1"
        >{text}
        </h2>
    )
}

export default H2
