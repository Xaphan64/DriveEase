// ASSETS

// STYLES
import { StyledContainer } from "../About/About.style";
import { StyledGridContainer } from "./VehicleModels.style";

// LIBRARIES

// MISC
import { VehicleList } from "../../cards/VehicleCard/VehicleList";

// COMPONENTS
import ContactCard from "../../cards/ContactCard/ContactCard";
import HeaderCard from "../../cards/HeaderCard/HeaderCard";
import VehicleCard from "../../cards/VehicleCard/VehicleCard";

// CONFIGURATION
const VehicleModels = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <StyledContainer>
      <HeaderCard />

      <StyledGridContainer>
        {VehicleList.map((car, index) => (
          <VehicleCard
            key={index}
            image={car.image}
            brand={car.brand}
            model={car.model}
            year={car.year}
            gear={car.gear}
            price={car.price}
            ranking={car.ranking}
            fuel={car.fuel}
          />
        ))}
      </StyledGridContainer>

      <ContactCard />
    </StyledContainer>
  );
};

export default VehicleModels;
