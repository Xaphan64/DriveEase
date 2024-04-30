// ASSETS

// STYLES
import { StyledContainer, StyledLayout, WorkInProgress } from "./Layout.style";

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
        {/* <WorkInProgress>Please note that this is a work in progress project!</WorkInProgress> */}

        <Outlet />
      </StyledContainer>

      <Footer />
    </StyledLayout>
  );
};

export default Layout;
