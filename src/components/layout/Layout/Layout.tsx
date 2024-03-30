// ASSETS

// STYLES
import { Outlet } from "react-router-dom";
import { StyledLayout, StyledOutlet } from "./Layout.style";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// LIBRARIES

// MISC

// COMPONENTS

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

      <StyledOutlet>
        <Outlet />
      </StyledOutlet>

      <Footer />
    </StyledLayout>
  );
};

export default Layout;
