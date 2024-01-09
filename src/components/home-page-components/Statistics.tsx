import { statisticsImageAndText } from "../../utils/home-utils/homeUtils";
import "../../styles/home-styles/statistics.css";

const Statistics = () => {
  return (
    <div className="w-full">
      <h2 className="all-home-components-heading-h1">Statistics</h2>
      <div className="statistics-box-div hideScrollbar">
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
      </div>
    </div>
  )
}

export default Statistics 
