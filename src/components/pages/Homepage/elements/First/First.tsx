// ASSETS
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import firstCar from "../../../../assets/firstCar.png";

// STYLES
import { StyledFirstContainer, StyledFirstText, StyledImage } from "./First.style";
import { StyledButton } from "../../../../atoms/Button/Button.style";

// LIBRARIES
import { useNavigate } from "react-router-dom";

// MISC

// COMPONENTS

// CONFIGURATION
const First = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS
  const navigate = useNavigate();

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <StyledFirstContainer $flexDirection="row" $gap="32px" $maxWidth="100%" $padding="0 24px">
      <StyledFirstContainer $flexDirection="column" $gap="24px" $maxWidth="500px">
        <StyledFirstText fontSize="24px" fontWeight="bold">
          Plan your trip now
        </StyledFirstText>

        <StyledFirstText fontSize="48px" fontWeight="bold" color="#f2613f">
          Save big with our car rental
        </StyledFirstText>

        <StyledFirstText fontSize="16px" color="gray">
          Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.
        </StyledFirstText>

        <StyledFirstContainer $flexDirection="row" $gap="32px" $mediaQuery="450px">
          <StyledButton
            type="button"
            onClick={() => (window.location.href = "#book-ride")}
            $backgroundColor="#f2613f"
            hoverColor="#ffffff"
            $hoverBackgroundColor="#fa4226"
            width="280px"
          >
            Book Ride <CheckCircleOutlineIcon />
          </StyledButton>

          <StyledButton
            type="button"
            onClick={() => navigate("/about")}
            $backgroundColor="#ffffff"
            $hoverBackgroundColor="#0c0c0c"
            color="#0c0c0c"
            hoverColor="#ffffff"
            hoverBorder="1px solid #ffffff"
            $border="1px solid #ffffff"
            width="280px"
          >
            Learn More <NavigateNextIcon />
          </StyledButton>
        </StyledFirstContainer>
      </StyledFirstContainer>

      <StyledImage src={firstCar} alt="" />
    </StyledFirstContainer>
  );
};

export default First;
