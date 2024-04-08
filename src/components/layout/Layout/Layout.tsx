// ASSETS

// STYLES
import { StyledContainer, StyledLayout } from "./Layout.style";

// LIBRARIES
import { Outlet } from "react-router-dom";

// MISC

// COMPONENTS
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

// CONFIGURATION
const Layout = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <StyledLayout>
      <Header />

      <StyledContainer>
        <Outlet />
      </StyledContainer>

      <Footer />
    </StyledLayout>
  );
};

export default Layout;
