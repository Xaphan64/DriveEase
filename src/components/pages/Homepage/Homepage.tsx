// ASSETS
import city from "../../assets/city.png";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

// STYLES
import { StyledPageCategory, StyledPageContainer, StyledText, StyledTitle } from "./Homepage.style";
import { Button, StyledButton } from "../../atoms/Button/Button.style";

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
  // backgroundPosition: "center",
};

const Homepage = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS
  const navigate = useNavigate();

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <StyledPageContainer>
      <div style={cityStyles} />

      <StyledPageCategory>
        <StyledPageCategory $flexDirection="column" gap="32px" width="40%">
          <StyledText fontSize="24px" fontWeight="bold">
            Plan your trip now
          </StyledText>

          {/* <StyledText $fontSize="60px" $fontWeight="bold">
            Save
            <StyledText $fontSize="60px" $fontWeight="bold" $color="#f2613f">
              big
            </StyledText>
            with our car rental
          </StyledText> */}

          <StyledTitle>
            <span>
              Save <p>big</p> with our
            </span>
            <span>car rental</span>
          </StyledTitle>

          <StyledText fontSize="16px" color="gray">
            Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.
          </StyledText>

          <StyledPageCategory $flexDirection="row" gap="32px">
            <StyledButton
              type="button"
              onClick={() => navigate("/")}
              backgroundColor="#f2613f"
              hoverColor="#ffffff"
              hoverBackgroundColor="#fa4226"
            >
              Book Ride <CheckCircleOutlineIcon />
            </StyledButton>

            <StyledButton
              type="button"
              onClick={() => navigate("/about")}
              backgroundColor="#ffffff"
              hoverBackgroundColor="#0c0c0c"
              color="#0c0c0c"
              hoverColor="#ffffff"
              hoverBorder="1px solid #ffffff"
              border="1px solid #ffffff"
            >
              Learn More <NavigateNextIcon />
            </StyledButton>
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
