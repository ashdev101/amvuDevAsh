import { useInView } from "react-intersection-observer";
import "../../styles/home-styles/statistics.css";
import { statisticsImageAndText } from "../../utils/home-utils/homeUtils";
import H2 from "./components/H2";
import clsx from "clsx";
const Statistics = () => {
  const { ref, inView } = useInView()
  return (
    <div className="w-full" ref={ref}>
      <H2 text="Statistics" />
      <div
        className={clsx("statistics-box-div hideScrollbar", inView ? "zoom-in" : "animate-fadeout")}>
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
