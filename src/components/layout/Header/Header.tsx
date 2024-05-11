// ASSETS
import car from "../../assets/car.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// STYLES
import { OrangeMobileButton, NavButton, MobileButton, Button } from "../../atoms/Button/Button.style";
import { StyledContainer } from "../Layout/Layout.style";
import { StyledButtonContainer, StyledLogo, StyledLogoText, StyledMobileButtonContainer } from "./Header.style";

// LIBRARIES
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// MISC

// COMPONENTS

// CONFIGURATION
export type HeaderProps = {
  $padding?: string;
  $alignitems?: string;
  height?: string;
};

const Header = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS
  const navigate = useNavigate();
  const location = useLocation();

  // STATE CONSTANTS
  const [$showNavbar, setShowNavbar] = useState(false);

  // LIFE CYCLE
  useEffect(() => {
    setShowNavbar(false);
  }, [location]);

  // EVENT HANDLERS
  return (
    <StyledContainer $padding="40px 32px" $alignitems="center">
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

      <StyledMobileButtonContainer $showNavbar={$showNavbar}>
        <Button type="button" onClick={() => navigate("/")}>
          home
        </Button>

        <Button type="button" onClick={() => navigate("/about")}>
          about
        </Button>

        <Button type="button" onClick={() => navigate("/models")}>
          vehicle models
        </Button>

        <Button type="button" onClick={() => navigate("/testimonials")}>
          testimonials
        </Button>

        <Button type="button" onClick={() => navigate("/team")}>
          our team
        </Button>

        <Button type="button" onClick={() => navigate("/contact")}>
          contact
        </Button>
      </StyledMobileButtonContainer>

      <StyledButtonContainer>
        <NavButton type="button" onClick={() => navigate("/login")}>
          login
        </NavButton>

        <OrangeMobileButton
          type="button"
          onClick={() => navigate("/register")}
          $backgroundColor="#f2613f"
          hoverColor="#ffffff"
          $hoverBackgroundColor="#fa4226"
        >
          register
        </OrangeMobileButton>

        {$showNavbar ? (
          <MobileButton type="button" onClick={() => setShowNavbar((prev) => !prev)}>
            <CloseIcon />
          </MobileButton>
        ) : (
          <MobileButton type="button" onClick={() => setShowNavbar((prev) => !prev)}>
            <MenuIcon />
          </MobileButton>
        )}
      </StyledButtonContainer>
    </StyledContainer>
  );
};

export default Header;
