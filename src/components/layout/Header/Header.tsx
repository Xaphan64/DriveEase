// ASSETS
import car from "../../assets/car.png";
import MenuIcon from "@mui/icons-material/Menu";

// STYLES
import { NavButton, OrangeButton } from "../../atoms/Button/Button.style";
import { StyledContainer } from "../Layout/Layout.style";
import { StyledButtonContainer, StyledLogo, StyledLogoText } from "./Header.style";

// LIBRARIES
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// MISC

// COMPONENTS

// CONFIGURATION
export interface HeaderProps {
  $padding?: string;
  $alignItems?: string;
  height?: string;
}

const Header = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS
  const navigate = useNavigate();
  // const isMobile = window.matchMedia("(max-width: 992px)")?.matches;

  // STATE CONSTANTS
  const [showNavbar, setShowNavbar] = useState(false);

  console.log(showNavbar);
  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <StyledContainer $padding="40px 32px" $alignItems="center">
      <StyledLogo onClick={() => navigate("/")}>
        <img src={car} alt="car" />

        <StyledLogoText>
          <h2>ease</h2>
          <span>drive</span>
        </StyledLogoText>
      </StyledLogo>

      <StyledButtonContainer>
        <NavButton type="button" onClick={() => navigate("/")}>
          home
        </NavButton>

        <NavButton type="button" onClick={() => navigate("/about")}>
          about
        </NavButton>

        <NavButton type="button" onClick={() => navigate("/models")}>
          vehicle models
        </NavButton>

        <NavButton type="button" onClick={() => navigate("/testimonials")}>
          testimonials
        </NavButton>

        <NavButton type="button" onClick={() => navigate("/team")}>
          our team
        </NavButton>

        <NavButton type="button" onClick={() => navigate("/contact")}>
          contact
        </NavButton>
      </StyledButtonContainer>

      <StyledButtonContainer>
        <>
          <NavButton type="button" onClick={() => navigate("/login")}>
            login
          </NavButton>

          <OrangeButton type="button" onClick={() => navigate("/register")}>
            register
          </OrangeButton>
        </>

        {/* <NavButton type="button" onClick={() => setShowNavbar((prev) => !prev)}>
          <MenuIcon />
        </NavButton> */}
      </StyledButtonContainer>
    </StyledContainer>
  );
};

export default Header;
