// ASSETS

// STYLES

import { StyledContainer } from "../About/About.style";
import { StyledGridContainer } from "../VehicleModels/VehicleModels.style";

// LIBRARIES

// MISC
import { TeamList } from "../../cards/TeamCard/TeamList";

// COMPONENTS
import ContactCard from "../../cards/ContactCard/ContactCard";
import HeaderCard from "../../cards/HeaderCard/HeaderCard";
import TeamCard from "../../cards/TeamCard/TeamCard";

// CONFIGURATION
const Team = () => {
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
        {TeamList.map((person, index) => (
          <TeamCard key={index} image={person.image} name={person.name} position={person.position} />
        ))}
      </StyledGridContainer>

      <ContactCard />
    </StyledContainer>
  );
};

export default Team;
