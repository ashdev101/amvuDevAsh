import { statisticsImageAndText } from "../../utils/home-utils/homeUtils";
import "../../styles/home-styles/statistics.css";
import { motion } from "framer-motion"
import H2 from "./components/H2";
const Statistics = () => {
  return (
    <div className="w-full">
      <H2 text="Statistics" />
      <motion.div
        className="statistics-box-div hideScrollbar"
        initial={{ x: "-50px", opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.8,
          },
        }}
      >
        {
          statisticsImageAndText && statisticsImageAndText.map((element, index) => (
            <div key={index} className="flex flex-col justify-center items-center">
              <img src={element.image} alt={element.text} className="w-[69px] h-[59px] object-cover" />
              <p className=" text-[#4D4D4D] font-[800] md:text-[30.49px] text-[20px] md:px-0 px-[20px]">
                {element.number.toLocaleString('en', { useGrouping: true })}+
              </p>
              <p className="text-[#4D4D4D] text-[13.49px] font-[700]">{element.text}</p>
            </div>
          ))
        }
      </motion.div>
    </div>
  )
}

export default Statistics 
