// ASSETS
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import DraftsIcon from "@mui/icons-material/Drafts";

// STYLES
import { SidemenuContainer } from "./Sidemenu.style";
import { StyledButton } from "../atoms/Button/Button.style";

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
      <button onClick={() => handleSwitchPage("home")}>Home</button>
      <button onClick={() => handleSwitchPage("about")}>About</button>
      <button onClick={() => handleSwitchPage("portfolio")}>Portfolio</button>
      <button onClick={() => handleSwitchPage("contact")}>Contact</button>

      {/* <Button buttonIcon="test" onClick={() => handleSwitchPage("home")} /> */}
      <StyledButton onClick={() => handleSwitchPage("home")} backgroundColor="gray">
        <span>HOME</span>
        <HomeIcon id="icon" />
      </StyledButton>

      <StyledButton onClick={() => handleSwitchPage("home")} backgroundColor="gray">
        <span>HOME</span>
        <HomeIcon />
      </StyledButton>
    </SidemenuContainer>
  );
};

export default Sidemenu;
