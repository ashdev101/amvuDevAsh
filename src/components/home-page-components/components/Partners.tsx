import { ourPartners } from "../../../utils/home-utils/homeUtils"

const Partners = () => {
    return (
        <div className="mt-[50px] flex flex-col">
            <h1 className="all-home-components-heading-h1">Our Partners</h1>
            <div className="lg:bg-[#FBFBFB] bg-slate-200 w-[90%] md:h-[198px] h-[130px] overflow-auto hideScrollbar gap-[20px] m-auto md:mt-[50px] mt-[30px] flex justify-between px-[70px] items-center z-10" style={{ borderRadius: "10px 52px 10px 42px" }} >
                {
                    ourPartners.length && ourPartners.map((element, index) => (
                        <img src={element.icon} alt={element.alt} key={index} className="lg:w-[178px] md:w-[150px] sm:w-[100px] w-[70px] lg:h-[172px] md:h-[150px] sm:h-[100px] h-[70px] auto-scroll" />
                    ))
                }
            </div>
        </div>
    )
}

export default Partners
