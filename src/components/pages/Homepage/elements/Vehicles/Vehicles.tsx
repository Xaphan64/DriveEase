// ASSETS

import { StyledVehiclesContainer, StyledVehiclesText } from "./Vehicles.style";

// STYLES

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
const Vehicles = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <StyledVehiclesContainer flexDirection="column" gap="40px" alignItems="center">
      <StyledVehiclesContainer flexDirection="column" gap="16px" alignItems="center">
        <StyledVehiclesText fontSize="24px" fontWeight="bold">
          Vehicle Models
        </StyledVehiclesText>

        <StyledVehiclesText fontSize="40px" fontWeight="bold">
          Our rental fleet
        </StyledVehiclesText>

        <StyledVehiclesText maxWidth="500px" lineHeight="1.5" color="lightgray">
          Choose from a variety of our amazing vehicles to rent for your next adventure or business trip
        </StyledVehiclesText>
      </StyledVehiclesContainer>

      <StyledVehiclesContainer justifyContent="space-around" width="100%">
        <div>buttons left</div>

        <div>center image</div>

        <div>right specs</div>
      </StyledVehiclesContainer>
    </StyledVehiclesContainer>
  );
};

export default Vehicles;
