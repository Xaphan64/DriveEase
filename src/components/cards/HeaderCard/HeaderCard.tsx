// ASSETS

// STYLES
import { StyledHeaderCardContainer, StyledHeaderImage, StyledHeaderText } from "./HeaderCard.style";

// LIBRARIES
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// MISC

// COMPONENTS

// CONFIGURATION
const HeaderCard = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS
  const location = useLocation();

  // STATE CONSTANTS
  const [pageTitle, setPageTitle] = useState("");

  // LIFE CYCLE
  useEffect(() => {
    if (location.pathname === "/about") {
      setPageTitle("About");
    } else if (location.pathname === "/models") {
      setPageTitle("Vehicle Models");
    } else if (location.pathname === "/testimonials") {
      setPageTitle("Testimonials");
    } else if (location.pathname === "/team") {
      setPageTitle("Our Team");
    } else if (location.pathname === "/contact") {
      setPageTitle("Contact");
    }
  }, [location]);

  // EVENT HANDLERS
  return (
    <StyledHeaderCardContainer>
      <StyledHeaderImage />
      <StyledHeaderText $fontSize="32px" $fontWeight="bold">
        {pageTitle}
      </StyledHeaderText>
      <StyledHeaderText $fontSize="16px">Home / {pageTitle}</StyledHeaderText>
    </StyledHeaderCardContainer>
  );
};

export default HeaderCard;
