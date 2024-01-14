import { AboutUsTopImage } from "../../utils/about-utils/images"

const AboutPageTop = () => {
    return (
        <div className="w-full flex justify-center items-center mt-[2%]">
            <img src={AboutUsTopImage} className="2xl:w-[100%] w-[90%]" />
        </div>
    )
}

export default AboutPageTop
