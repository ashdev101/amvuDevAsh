import { visionCardTextAndImage } from "../../utils/home-utils/homeUtils";
import "../../styles/home-styles/ourVision.css"

const OurVision = () => {


  function randomTop() {
    return `${Math.floor(Math.random() * 200)}px`
  }
  function randomLeft() {
    return `${Math.floor(Math.random() * 1000)}px`
  }

  return (
    <div className="w-full relative xl:mt-[80px] lg:mt-[70px] mt-[50px]">
      <h2 className="all-home-components-heading-h1">Our Vision</h2>

      {/* Cards Container */}
      <div className="md:h-[320.93px] h-[280px] sm:w-[70%] w-[90%]  flex xl:justify-evenly justify-between overflow-auto  hideScrollbar gap-[30px]  m-auto mt-14 mb-3 ">
        {/* Cards */}
        {
          visionCardTextAndImage && visionCardTextAndImage.map((element, index) => (
            <div key={index} className="w-[218.63px] h-full border-[3px] border-black rounded-[20px] gap-[17px] flex flex-col pt-[25px] items-center" >
              <p className=" capitalize font-[700] text-[15px] leading-[22.5px] text-[#263238] text-center w-[182.53px] md:px-0 px-[4px] ">
                <span className="font-[400] text-[12px] text-[#000000]" >{element.text1}</span> <br />
                {element.text2}
              </p>
              <img src={element.image} alt={element.text2} className="md:w-[199px] w-[172px] md:h-[164px] h-[139px] object-contain" />
            </div>
          ))
        }

      </div>

      {/* gradients-circles */}
      <div className="our-vision-gradients-square1" style={{ top: randomTop(), left: randomLeft() }}></div>
      <div className="our-vision-gradients-square2" style={{ top: randomTop(), left: randomLeft() }}></div>
      <div className="our-vision-gradients-square3" style={{ top: randomTop(), left: randomLeft() }}></div>
      <div className="our-vision-gradients-square4" style={{ top: randomTop(), left: randomLeft() }}></div>

    </div>
  )
}

export default OurVision
