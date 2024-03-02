// ASSETS
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import DraftsIcon from "@mui/icons-material/Drafts";

// STYLES
import { SidemenuContainer } from "./Sidemenu.style";
import { StyledButton, ButtonText } from "../atoms/Button/Button.style";

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
const Sidemenu = ({ handleSwitchPage }) => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <SidemenuContainer>
      <StyledButton onClick={() => handleSwitchPage("home")} backgroundColor="#2b2a2a" width="175px">
        <ButtonText>HOME</ButtonText>
        <HomeIcon />
      </StyledButton>

      <StyledButton onClick={() => handleSwitchPage("about")} backgroundColor="#2b2a2a" width="175px">
        <ButtonText>ABOUT</ButtonText>
        <PersonIcon />
      </StyledButton>

      <StyledButton onClick={() => handleSwitchPage("portfolio")} backgroundColor="#2b2a2a" width="175px">
        <ButtonText>PORTFOLIO</ButtonText>
        <WorkIcon />
      </StyledButton>

      <StyledButton onClick={() => handleSwitchPage("contact")} backgroundColor="#2b2a2a" width="175px">
        <ButtonText>CONTACT</ButtonText>
        <DraftsIcon />
      </StyledButton>
    </SidemenuContainer>
  );
};

export default Sidemenu;
