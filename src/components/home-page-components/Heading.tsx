import "../../styles/home-styles/heading.css";
import { socialMediaLinks } from "../../utils/home-utils/homeUtils";
import { AmbuviansImage, IllusBG } from "../../utils/home-utils/images";

const Heading = () => {
  return (
    <div className="flex relative xl:h-[700px] lg:h-[600px] md:h-[500px] sm:h-[380px] h-[320px]">

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
                className="heading-social-links-a btnFillup liquidbg"
              >
                <sociallink.icon className="heading-social-link-icons" />
              </a>
            ))}
      <a href="" className="btn">Explore</a>
        </div>
      </div>

      {/* Ambuvians Image Div - Right Side Content */}
      <div>
        <img src={IllusBG} alt="" className="rotate 2xl:w-[619px] xl:w-[550px] lg:w-[430px] xl:top-[20px] lg:top-[30px] absolute lg:flex hidden top-0 2xl:left-[760px] xl:left-[650px] lg:left-[580px] -z-0" />
        <div className="heading-ambuvians-image-div">
          <img src={AmbuviansImage} alt="Ambuvians Image" className="heading-ambuvians-image" />
        </div>
      </div> 
    </div>
  );
};

export default Heading;
