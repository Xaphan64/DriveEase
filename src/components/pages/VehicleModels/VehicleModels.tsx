// ASSETS

// STYLES
import ContactCard from "../../cards/ContactCard/ContactCard";
import HeaderCard from "../../cards/HeaderCard/HeaderCard";
import VehicleCard from "../../cards/VehicleCard/VehicleCard";
import { StyledContainer } from "../About/About.style";
import { StyledModelsCarContainer } from "./VehicleModels.style";

// LIBRARIES

// MISC
import { VehicleList } from "../../cards/VehicleCard/VehicleList";

// COMPONENTS

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

      <StyledModelsCarContainer>
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

        {/* <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />

        <div>five</div>
        <div>six</div>
        <div>seven</div>
        <div>eight</div>
        <div>nine</div>
        <div>ten</div>
        <div>eleven</div>
        <div>twelve</div> */}
      </StyledModelsCarContainer>

      <ContactCard />
    </StyledContainer>
  );
};

export default VehicleModels;
