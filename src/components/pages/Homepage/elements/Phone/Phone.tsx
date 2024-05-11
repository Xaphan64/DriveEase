// ASSETS
import android from "../../../../assets/android.png";
import ios from "../../../../assets/ios.png";
// STYLES
import { StyledPhoneContainer, StyledPhoneImage, StyledPhoneText } from "./Phone.style";

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
const Phone = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <StyledPhoneContainer $flexDirection="column" $justifyContent="center" $gap="32px" $padding="150px 0 100px 0">
      <StyledPhoneImage />

      <StyledPhoneText fontSize="40px" fontWeight="bold" $lineHeight="1.5" $maxWidth="500px">
        Download our app to get most out of it
      </StyledPhoneText>

      <StyledPhoneText color="lightgray" $lineHeight="1.5" $maxWidth="500px">
        Discover the convenience of renting a car on-the-go with our mobile app. Easily book, manage, and track your
        rentals from anywhere, anytime. Download now and enjoy seamless car rental experiences at your fingertips
      </StyledPhoneText>

      <StyledPhoneContainer $gap="32px" $padding="0 8px" $mediaQuery="650px">
        <img src={android} alt="" />

        <img src={ios} alt="" />
      </StyledPhoneContainer>
    </StyledPhoneContainer>
  );
};

export default Phone;
