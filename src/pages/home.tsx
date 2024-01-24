import { ScrollContainer } from "react-scroll-motion";
import Heading from "../components/home-page-components/Heading";
import MentorsPartnersFeedback from "../components/home-page-components/MentorsPartnersFeedback";
import OurVision from "../components/home-page-components/OurVision";
import Services from "../components/home-page-components/Services";
import Statistics from "../components/home-page-components/Statistics";
import WhatMakesUsDifferent from "../components/home-page-components/WhatMakesUsDifferent";
import WhyWeNeedAmbuvians from "../components/home-page-components/WhyWeNeedAmbuvians";
import "../styles/home-styles/home.css";

const Home = () => {
  return (
    <div>
      <ScrollContainer>
        <Heading />
        <Statistics />
        <OurVision />
        <Services />
        <WhatMakesUsDifferent />
        <WhyWeNeedAmbuvians />
        <MentorsPartnersFeedback />
      </ScrollContainer>
    </div>
  );
};

export default Home;

