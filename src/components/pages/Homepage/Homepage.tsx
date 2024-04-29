// ASSETS
import city from "../../assets/city.png";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

// STYLES
import { BackgroundImage, StyledPageCategory, StyledPageContainer, StyledText } from "./Homepage.style";
import { BlackButton, OrangeButton } from "../../atoms/Button/Button.style";

// LIBRARIES
import { useNavigate } from "react-router-dom";

// MISC

// COMPONENTS

// CONFIGURATION
const cityStyles: React.CSSProperties = {
  backgroundImage: `url(${city})`,
  width: "100%",
  height: "100%",
  position: "absolute",
  right: "0",
  top: "0",
  zIndex: "-1",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Homepage = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS
  const nagivate = useNavigate();

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <StyledPageContainer>
      {/* <BackgroundImage /> */}

      <div style={cityStyles} />

      <StyledPageCategory>
        <StyledPageCategory $flexDirection="column" $gap="32px" $width="40%">
          <StyledText $fontSize="24px" $fontWeight="bold">
            Plan your trip now
          </StyledText>

          <StyledText $fontSize="60px" $fontWeight="bold">
            Save
            <StyledText $fontSize="60px" $fontWeight="bold" $color="#f2613f">
              big
            </StyledText>
            <p>big</p>
            with our car rental
          </StyledText>

          <StyledText $fontSize="16px" $color="gray">
            Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.
          </StyledText>

          <StyledPageCategory $flexDirection="row" $gap="32px">
            <OrangeButton type="button" onClick={() => nagivate("/")}>
              Book Ride <CheckCircleOutlineIcon />
            </OrangeButton>

            <BlackButton type="button" onClick={() => nagivate("/about")}>
              Learn More <NavigateNextIcon />
            </BlackButton>
          </StyledPageCategory>
        </StyledPageCategory>

        <h1>image</h1>
      </StyledPageCategory>

      <div>
        <h1>inputs</h1>
      </div>

      <div>
        <h1>card text</h1>
        <h1>card text</h1>
        <h1>card text</h1>
      </div>

      <div>
        <h1>vehicles</h1>
      </div>

      <div>
        <h1>white color card</h1>
      </div>

      <div>
        <h1>car image with background</h1>

        <h1>text</h1>
      </div>

      <div>
        <h1>client testimonials</h1>
      </div>

      <div>
        <h1>FAQ</h1>
      </div>

      <div>
        <h1>phone download</h1>
      </div>
    </StyledPageContainer>
  );
};

export default Homepage;
