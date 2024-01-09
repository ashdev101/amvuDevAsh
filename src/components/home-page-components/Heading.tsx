import { socialMediaLinks } from "../../utils/home-utils/homeUtils";
import { AmbuviansImage, Illus } from "../../utils/home-utils/images";
import "../../styles/home-styles/heading.css";
import Button from "../Button";

const Heading = () => {
  return (
    <div className="flex relative xl:h-[800px] lg:h-[630px] md:h-[530px] sm:h-[400px] h-[340px]">

      {/* Heading and paragraph div - Left Side Content */}
      <div className="w-[50%] flex items-start flex-col relative">
        <div className=" relative">
          <h1 className="heading-H1">
            Ambuvians <br />
            <span className="text-[#E85A4F]"> Healthcare</span>
          </h1>
          <p className="heading-description-p">
            "Empowering health and wellness, we the 'Ambuvians' is dedicated to
            providing cutting-edge solutions and compassionate care. With a team
            of skilled professionals and a commitment to innovation, we strive
            to make a positive impact on lives. Your well-being is our priority,
            and we are here to offer you rapid ambulance services organized by
            skilled medical professionals and advanced technologies."
          </p>
        </div>

        {/* Social Links Div */}
        <div className="heading-social-links-div">
          {socialMediaLinks &&
            socialMediaLinks.map((sociallink, index) => (
              <a
                key={index}
                href={sociallink.href}
                className="heading-social-links-a"
              >
                <sociallink.icon className="heading-social-link-icons" />
              </a>
            ))}
          <Button text="Explore" />
        </div>
      </div>

      {/* Ambuvians Image Div - Right Side Content */}
      <div>
        <img src={Illus} alt="" className="opacity-90 absolute xl:flex hidden top-0 2xl:left-[760px] xl:left-[590px] lg:left-[430px] -z-0" />
        <div className="absolute -z-10 bg-[#5CBAD3] w-[60px] h-[60px] xl:flex hidden rounded-full top-[400px] right-[130px]"></div>
        <div className="heading-ambuvians-image-div">
          <img src={AmbuviansImage} alt="Ambuvians Image" className="heading-ambuvians-image" />
        </div>
      </div>
    </div>
  );
};

export default Heading;
