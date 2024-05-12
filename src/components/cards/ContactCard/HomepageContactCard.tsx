// ASSETS

// STYLES
import { StyledCardText, StyledContactCard, StyledContactCardContainer } from "./ContactCard.style";

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
const HomepageContactCard = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <StyledContactCardContainer paddingButtom="140px">
      <StyledContactCard flexDirection="column" gap="16px" backgroundColor="gray">
        <StyledCardText fontSize="40px" color="white">
          Save big with our cheap car rental!
        </StyledCardText>
        <StyledCardText fontSize="24px" color="#f2613f">
          Top Airports. Local Suppliers. 24/7 Support.
        </StyledCardText>
      </StyledContactCard>
    </StyledContactCardContainer>
  );
};

export default HomepageContactCard;
