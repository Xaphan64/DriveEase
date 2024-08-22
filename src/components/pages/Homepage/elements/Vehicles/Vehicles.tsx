// ASSETS

// STYLES
import { StyledVehiclesContainer, StyledVehiclesText } from "./Vehicles.style";

// LIBRARIES
import { useState } from "react";

// MISC

// COMPONENTS
import VehicleButtons from "./components/VehicleButtons";
import VehicleImages from "./components/VehicleImages";
import VehicleSpecs from "./components/VehicleSpecs";

// CONFIGURATION
const Vehicles = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS
  const [vehicleTab, setVehicleTab] = useState(0);

  // LIFE CYCLE

  // EVENT HANDLERS
  const handleSwitchTab = (index: number) => {
    setVehicleTab(index);
  };

  return (
    <StyledVehiclesContainer $flexDirection="column" $gap="40px" $alignItems="center" $margin="100px 0">
      <StyledVehiclesContainer $flexDirection="column" $gap="16px" $alignItems="center">
        <StyledVehiclesText fontSize="24px" fontWeight="bold">
          Vehicle Models
        </StyledVehiclesText>

        <StyledVehiclesText fontSize="40px" fontWeight="bold">
          Our rental fleet
        </StyledVehiclesText>

        <StyledVehiclesText $maxWidth="500px" $lineHeight="1.5" color="lightgray">
          Choose from a variety of our amazing vehicles to rent for your next adventure or business trip
        </StyledVehiclesText>
      </StyledVehiclesContainer>

      <StyledVehiclesContainer $justifyContent="space-evenly" width="100%" $mediaQuery="1150px">
        <StyledVehiclesContainer
          $flexDirection="column"
          $gap="8px"
          height="370px"
          $overflowY="auto"
          $mediaQuery2="1150px"
        >
          <VehicleButtons vehicleTab={vehicleTab} handleSwitchTab={handleSwitchTab} />
        </StyledVehiclesContainer>

        <VehicleImages vehicleTab={vehicleTab} />

        <VehicleSpecs vehicleTab={vehicleTab} />
      </StyledVehiclesContainer>
    </StyledVehiclesContainer>
  );
};

export default Vehicles;
