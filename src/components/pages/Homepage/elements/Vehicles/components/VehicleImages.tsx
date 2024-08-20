// ASSETS

// STYLES

// LIBRARIES

// MISC
import { VehicleList } from "../../../../../cards/VehicleCard/VehicleList";
import { StyledVehiclesImage, StyledVehiclesImageContainer } from "../Vehicles.style";

// COMPONENTS

// CONFIGURATION
type VehicleListProps = {
  vehicleTab: number;
};

const VehicleImages: React.FC<VehicleListProps> = ({ vehicleTab }) => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <>
      {vehicleTab === 0 && (
        <StyledVehiclesImageContainer height="400px">
          <StyledVehiclesImage alt="" src={VehicleList[0].pngImage} />
        </StyledVehiclesImageContainer>
      )}

      {vehicleTab === 1 && (
        <StyledVehiclesImageContainer height="400px">
          <StyledVehiclesImage alt="" src={VehicleList[1].pngImage} />
        </StyledVehiclesImageContainer>
      )}

      {vehicleTab === 2 && (
        <StyledVehiclesImageContainer height="400px">
          <StyledVehiclesImage alt="" src={VehicleList[2].pngImage} />
        </StyledVehiclesImageContainer>
      )}

      {vehicleTab === 3 && (
        <StyledVehiclesImageContainer height="400px">
          <StyledVehiclesImage alt="" src={VehicleList[3].pngImage} />
        </StyledVehiclesImageContainer>
      )}

      {vehicleTab === 4 && (
        <StyledVehiclesImageContainer height="400px">
          <StyledVehiclesImage alt="" src={VehicleList[4].pngImage} />
        </StyledVehiclesImageContainer>
      )}

      {vehicleTab === 5 && (
        <StyledVehiclesImageContainer height="400px">
          <StyledVehiclesImage alt="" src={VehicleList[5].pngImage} />
        </StyledVehiclesImageContainer>
      )}

      {vehicleTab === 6 && (
        <StyledVehiclesImageContainer height="400px">
          <StyledVehiclesImage alt="" src={VehicleList[6].pngImage} />
        </StyledVehiclesImageContainer>
      )}

      {vehicleTab === 7 && (
        <StyledVehiclesImageContainer height="400px">
          <StyledVehiclesImage alt="" src={VehicleList[7].pngImage} />
        </StyledVehiclesImageContainer>
      )}

      {vehicleTab === 8 && (
        <StyledVehiclesImageContainer height="400px">
          <StyledVehiclesImage alt="" src={VehicleList[8].pngImage} />
        </StyledVehiclesImageContainer>
      )}

      {vehicleTab === 9 && (
        <StyledVehiclesImageContainer height="400px">
          <StyledVehiclesImage alt="" src={VehicleList[9].pngImage} />
        </StyledVehiclesImageContainer>
      )}

      {vehicleTab === 10 && (
        <StyledVehiclesImageContainer height="400px">
          <StyledVehiclesImage alt="" src={VehicleList[10].pngImage} />
        </StyledVehiclesImageContainer>
      )}

      {vehicleTab === 11 && (
        <StyledVehiclesImageContainer height="400px">
          <StyledVehiclesImage alt="" src={VehicleList[11].pngImage} />
        </StyledVehiclesImageContainer>
      )}
    </>
  );
};

export default VehicleImages;
