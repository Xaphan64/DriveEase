// ASSETS
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

// STYLES
import { StyledCardText, StyledContactCard, StyledContactCardContainer } from "./ContactCard.style";

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
const ContactCard = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <StyledContactCardContainer $paddingButtom="100px">
      <StyledContactCard $gap="32px" $backgroundColor="gray">
        <StyledCardText fontSize="32px">Book a car by getting in touch with us</StyledCardText>
        <StyledCardText color="#f2613f" fontSize="32px">
          <LocalPhoneIcon />

          <span>(123) 456-7869</span>
        </StyledCardText>
      </StyledContactCard>
    </StyledContactCardContainer>
  );
};

export default ContactCard;
