import React from 'react'
import { motion } from "framer-motion"
import "../../../styles/home-styles/home.css"

interface H2PropsTypes {
    text: string
}
const H2: React.FC<H2PropsTypes> = ({ text }) => {
    return (
        <motion.h2
            className="all-home-components-heading-h1"
            initial={{ y: "20px", opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.8,
                },
            }}
        >{text}
        </motion.h2>
    )
}

export default H2
