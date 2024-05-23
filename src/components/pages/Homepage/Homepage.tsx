// ASSETS
import backgroundImage from "../../assets/backgroundImage.png";

// STYLES
import { StyledBackgroundImage, StyledPageContainer } from "./Homepage.style";

// LIBRARIES

// MISC

// COMPONENTS
import TestimonialPage from "../Testimonials/TestimonialPage";
import AboutPageCard from "../About/AboutPageCard";
import Phone from "./elements/Phone/Phone";
import Questions from "./elements/Questions/Questions";
import HomepageContactCard from "../../cards/ContactCard/HomepageContactCard";
import Choose from "./elements/Choose/Choose";
import Vehicles from "./elements/Vehicles/Vehicles";
import First from "./elements/First/First";
import Inputs from "./elements/Inputs/Inputs";

// CONFIGURATION

const Homepage = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <StyledPageContainer>
      <StyledBackgroundImage src={backgroundImage} alt="" />

      <First />

      <Inputs />

      <AboutPageCard />

      <Vehicles />

      <HomepageContactCard />

      <Choose />

      <TestimonialPage />

      <Questions />

      <Phone />
    </StyledPageContainer>
  );
};

export default Homepage;
