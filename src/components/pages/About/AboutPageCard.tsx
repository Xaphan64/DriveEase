// ASSETS
import CarRentalIcon from "@mui/icons-material/CarRental";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";

// STYLES
import { StyledAbout, StyledCardContainer, StyledText, StyledTextContainer } from "./About.style";

// LIBRARIES

// MISC

// COMPONENTS
import AboutCard from "../../cards/AboutCard/AboutCard";

// CONFIGURATION
const AboutPageCard = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <StyledAbout $flexDirection="column" $textAlign="center" $gap="64px" $margin="50px 0">
      <StyledTextContainer>
        <StyledText fontSize="32px">Plan your trip now</StyledText>
        <StyledText fontSize="48px" fontWeight="bold">
          Quick & easy car rental
        </StyledText>
      </StyledTextContainer>

      <StyledCardContainer $mediaQuery="900px">
        <AboutCard
          children={<CarRentalIcon />}
          number="Select Car"
          text="We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs"
          fontSize="32px"
          fontWeight="bold"
          color="lightgray"
          $flexDirection="column"
          $whiteSpace="nowrap"
          width="300px"
          $svgDimension="100px"
          $backgroundColor="lightgray"
        />

        <AboutCard
          children={<SupportAgentIcon />}
          number="Contact Operator"
          text="Our knowledgeable and friendly operators are always ready to help with any questions or concerns"
          fontSize="32px"
          fontWeight="bold"
          color="lightgray"
          $flexDirection="column"
          $whiteSpace="nowrap"
          width="300px"
          $svgDimension="100px"
          $backgroundColor="lightgray"
        />

        <AboutCard
          children={<AirportShuttleIcon />}
          number="Let's Drive"
          text="Whether you're hitting the open road, we've got you covered with our wide range of cars"
          fontSize="32px"
          fontWeight="bold"
          color="lightgray"
          $flexDirection="column"
          $whiteSpace="nowrap"
          width="300px"
          $svgDimension="100px"
          $backgroundColor="lightgray"
        />
      </StyledCardContainer>
    </StyledAbout>
  );
};

export default AboutPageCard;
