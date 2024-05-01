// ASSETS

// STYLES
import { StyledTeamCard, StyledTeamTextContainer } from "./TeamCard.style";
import { StyledText } from "../../pages/About/About.style";

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
type TeamCardProps = {
  image: string;
  name: string;
  position: string;
};

const TeamCard = (props: TeamCardProps) => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <StyledTeamCard>
      <img src={props.image} alt="" />

      <StyledTeamTextContainer>
        <StyledText fontSize="20px" fontWeight="bold">
          {props.name}
        </StyledText>

        <StyledText color="lightgray">{props.position}</StyledText>
      </StyledTeamTextContainer>
    </StyledTeamCard>
  );
};

export default TeamCard;
