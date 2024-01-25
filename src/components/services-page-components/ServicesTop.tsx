import clsx from "clsx";
import { useInView } from "react-intersection-observer";
import "../../styles/services-page-styles/servicesTop.css";
import { ServicesTopImage } from "../../utils/services-utils/images";

const ServicesTop = () => {
  const { ref, inView } = useInView()
  return (
    <div className={clsx("services-top-container", inView ? "animate-fadeup" : "animate-fadeout")} ref={ref}>
      <h2 className="services-top-h2">Services</h2>

      {/* side  gray wave rectangle svg  */}
      <svg xmlns="http://www.w3.org/2000/svg" width="353" height="932" viewBox="0 0 353 932" fill="none" className=" absolute right-0 h-full z-0 md:w-[20%] w-[34%]">
        <path d="M659.248 1041.5L0.256397 958.829C0.256397 958.829 275.753 490.771 161.982 305.931C95.9914 198.718 14.3364 125.015 12.3775 -1.98737C10.1951 -143.474 109.775 -209.931 139.717 -383.835C168.556 -551.329 63.1288 -745.243 63.1288 -745.243L759.543 -758.999L659.248 1041.5Z" fill="#D9D9D9" />
      </svg>

      {/* white wave first */}
      <svg xmlns="http://www.w3.org/2000/svg" width="1488" height="180" viewBox="0 0 1488 180" fill="none" className=" absolute 2xl:bottom-[-20px] xl:bottom-[-30px] md:bottom-[-55px] sm:bottom-[-65px] bottom-[-75px] h-[179px] bg-inherit w-full z-10">
        <path d="M-195.863 30.04C-195.863 30.04 -150.92 142.675 44.0392 142.675C238.998 142.675 290.898 -18.6188 509.61 1.78448C728.322 22.1878 843.084 126.953 1032.12 142.675C1399.78 173.253 1658.78 71.0686 1658.78 71.0686L1638.99 179.989L-216 159.088L-195.863 30.04Z" fill="#F6F6F6" />
      </svg>

      {/*  Wave Second  */}
      <svg xmlns="http://www.w3.org/2000/svg" width="1488" height="405" viewBox="0 0 1488 405" fill="none" className="absolute 2xl:bottom-[-50px] xl:bottom-[-100px] md:bottom-[-150px] sm:bottom-[-170px] bottom-[-209px] h-[500px] bg-inherit w-full z-10">
        <path d="M2014.67 119.854C2014.67 119.854 1884.02 308.19 1663.16 321.095C1442.3 333.999 1435.69 223.419 1188.88 258.271C942.068 293.123 943.632 353.755 730.221 381.967C635.84 394.444 453.555 95.0346 97.2575 266.238C-259.041 437.442 -848 0.540546 -848 0.540546L-346.678 383.412L2014.51 404.313L2014.67 119.854Z" fill="white" fillOpacity="0.2" />
      </svg>

      {/* Wave Third */}
      <svg xmlns="http://www.w3.org/2000/svg" width="1488" height="264" viewBox="0 0 1488 264" fill="none"
        className="absolute 2xl:bottom-[-50px] xl:bottom-[-60px] md:bottom-[-75px] sm:bottom-[-85px] bottom-[-105px] h-[250px] bg-inherit w-full z-10">
        <path d="M-191.488 2.51719C-191.488 2.51719 -40.4712 171.276 180.691 171.276C401.854 171.276 469.713 -18.0369 717.821 2.36635C965.93 22.7696 1096.12 127.535 1310.56 143.257C1727.64 173.835 2021.45 71.6504 2021.45 71.6504L1909.31 263.015L-256.758 212.31L-191.488 2.51719Z" fill="white" fillOpacity="0.21" />
      </svg>
      <img src={ServicesTopImage} alt="services" className="w-[100%] h-[100%] absolute rigth-0 top-0 object-cover z-0" />
    </div>
  )
}

export default ServicesTop
