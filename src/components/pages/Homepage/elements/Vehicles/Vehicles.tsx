// ASSETS

// STYLES
import { StyledVehiclesContainer, StyledVehiclesText } from "./Vehicles.style";

// LIBRARIES
import { useState } from "react";

// MISC
import { VehicleList } from "../../../../cards/VehicleCard/VehicleList";

// COMPONENTS
import HomepageCard from "../../../../cards/HomepageCard/HomepageCard";
import VehicleButtons from "./components/VehicleButtons";

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

      <StyledVehiclesContainer $justifyContent="space-evenly" width="100%">
        <StyledVehiclesContainer $flexDirection="column" $gap="8px" height="370px" overflowY="auto">
          <VehicleButtons vehicleTab={vehicleTab} handleSwitchTab={handleSwitchTab} />
        </StyledVehiclesContainer>

        {vehicleTab === 0 && (
          <div style={{ backgroundColor: "red", height: "400px" }}>
            <img style={{ width: "600px", height: "auto" }} alt="" src={VehicleList[0].pngImage} />
          </div>
        )}

        {vehicleTab === 1 && (
          <div style={{ backgroundColor: "red", height: "400px" }}>
            <img style={{ width: "600px", height: "auto" }} alt="" src={VehicleList[1].pngImage} />
          </div>
        )}

        {vehicleTab === 2 && (
          <div style={{ backgroundColor: "red", height: "400px" }}>
            <img style={{ width: "600px", height: "auto" }} alt="" src={VehicleList[2].pngImage} />
          </div>
        )}

        {vehicleTab === 0 && <HomepageCard index={vehicleTab} />}

        {vehicleTab === 1 && <HomepageCard index={vehicleTab} />}

        {vehicleTab === 2 && <HomepageCard index={vehicleTab} />}
      </StyledVehiclesContainer>
    </StyledVehiclesContainer>
  );
};

export default Vehicles;
