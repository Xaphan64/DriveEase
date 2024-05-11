// ASSETS
import aboutImage from "../../assets/aboutImage.webp";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import ConstructionIcon from "@mui/icons-material/Construction";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";

// STYLES
import { StyledAbout, StyledContainer, StyledAboutImage } from "./About.style";
import { StyledText, StyledTextContainer, StyledCardContainer } from "./About.style";

// LIBRARIES

// MISC

// COMPONENTS
import ContactCard from "../../cards/ContactCard/ContactCard";
import HeaderCard from "../../cards/HeaderCard/HeaderCard";
import AboutCard from "../../cards/AboutCard/AboutCard";
import AboutPageCard from "./AboutPageCard";

// CONFIGURATION
const About = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <StyledContainer>
      <HeaderCard />

      <StyledAbout $gap="32px">
        <StyledAboutImage>
          <img src={aboutImage} alt="" />
        </StyledAboutImage>

        <StyledTextContainer width="500px" $mediaQuery="500px">
          <StyledText fontSize="32px">About Company</StyledText>
          <StyledText fontSize="48px" fontWeight="bold" $lineHeight="1">
            You start the engine and your adventure begins
          </StyledText>
          <StyledText $lineHeight="1.3" color="lightgray">
            We strive to provide seamless transportation solutions tailored to your needs. With a diverse fleet of
            vehicles ranging from compact cars to luxury SUVs, we ensure a comfortable and enjoyable journey for every
            customer. Our commitment to exceptional service, competitive pricing, and hassle-free booking makes us the
            preferred choice for all your travel needs. Whether it's a weekend getaway, a business trip, or a family
            vacation, trust us to get you there safely and in style. Experience the difference with DriveEase.
          </StyledText>

          <StyledCardContainer $mediaQuery="500px">
            <AboutCard
              children={<TimeToLeaveIcon />}
              number="12"
              text="Car Types"
              fontSize="48px"
              fontWeight="bold"
              color="lightgray"
              width="100px"
              $svgDimension="60px"
            />
            <AboutCard
              children={<EmojiTransportationIcon />}
              number="21"
              text="Rental Outlets"
              fontSize="48px"
              fontWeight="bold"
              color="lightgray"
              width="100px"
              $svgDimension="60px"
            />
            <AboutCard
              children={<ConstructionIcon />}
              number="15"
              text="Repair Shops"
              fontSize="48px"
              fontWeight="bold"
              color="lightgray"
              width="100px"
              $svgDimension="60px"
            />
          </StyledCardContainer>
        </StyledTextContainer>
      </StyledAbout>

      <AboutPageCard />

      <ContactCard />
    </StyledContainer>
  );
};

export default About;
