// ASSETS
import placeholderImage from "../../assets/placeholder.webp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// STYLES
import { HomepageContainer, HomepageImage, HomepageDetails, HomepageText } from "./Homepage.style";
import { ButtonText, StyledButton } from "../../atoms/Button/Button.style";

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
const Homepage = ({ handleSwitchPage }) => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <HomepageContainer>
      <HomepageImage>
        <img src={placeholderImage} alt="placeholder" />
      </HomepageImage>

      <HomepageDetails>
        <HomepageText fontSize="48px" color="#ffb400" fontWeight="bold">
          I'M ALEXANDRU-DANIEL.
        </HomepageText>

        <HomepageText fontSize="48px" fontWeight="bold">
          WEB DEVELOPER
        </HomepageText>

        <HomepageText fontSize="20px" lineHeight="2">
          I'm an Online Requirements/Networking Specialist with a passion for Front-End development. Dedicated to
          mastering React JS, JavaScript, CSS, and HTML, with a steadfast dream to become a full-time React developer.
        </HomepageText>

        <StyledButton onClick={() => handleSwitchPage("about")} backgroundColor="#2b2a2a">
          <ButtonText>MORE ABOUT ME</ButtonText>
          <ArrowForwardIcon />
        </StyledButton>
      </HomepageDetails>
    </HomepageContainer>
  );
};

export default Homepage;
