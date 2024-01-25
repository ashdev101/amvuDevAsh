import { useInView } from "react-intersection-observer"
import "../../styles/services-page-styles/SUFStorage.css"
import { Mobile } from "../../utils/services-utils/images"
import clsx from "clsx"
const SUFStorage = () => {
    const { ref: rightRef, inView: rightInView } = useInView()
    const { ref: leftRef, inView: leftInView } = useInView()
    return (
        <div className="md:mt-[100px] mt-[40px] flex md:flex-row justify-center items-center flex-col-reverse">

            {/* Left Side Content */}
            <div className={clsx("SUFStorage-left-container", leftInView ? "animate-fadein" : "animate-fadeout")} ref={leftRef}>
                <h2 className="SUFStorage-left-container-h2">
                    Secure, User-Friendly <span className="text-[#FD0808]">Storage</span>
                </h2>
                <p className="SUFStorage-left-container-p">
                    Ambucloud is a next-gen cloud platform tailored for optimal performance and security. with swift upload speeds, top-notch data protection, and a premium query section, Ambucloud ensures a seamless and efficient user experience. the platform's intuitive interface further enhances accessibility, making it a standout choice for those seeking a high-performance cloud solution.
                </p>
            </div>

            {/* Right Side Image */}
            <div className={clsx("SUFStorage-right-container", rightInView ? "zoom-in" : "animate-fadeout")} ref={rightRef}>
                <img src={Mobile} alt="Mobile" className="lg:h-[95%] md:h-[100%] h-[90%] absolute bottom-[-5px] xl:left-[1%] lg:left-[5%] md:left-[0] sm:left-[3%] left-[5%] z-10" />

                <svg xmlns="http://www.w3.org/2000/svg" width="393" height="632" viewBox="0 0 393 632" fill="none" className=" absolute 2xl:right-[23%] xl:right-[7%] right-[0] top-0 h-[90%] 2xl:w-[50%] w-fit z-0">
                    <path d="M392.367 4.12091L143.942 629.191C142.65 632.444 137.683 631.152 138.026 627.669C172.633 275.928 83.1649 2.18118 1.94016 0.0129138L-2.45392e-05 0.012914C0.646124 -0.00442007 1.29288 -0.0043591 1.94016 0.0129138L389.579 0.0128788C391.699 0.0128786 393.15 2.15118 392.367 4.12091Z" fill="white" fillOpacity="0.2" />
                </svg>
            </div>
        </div>
    )
}

export default SUFStorage
