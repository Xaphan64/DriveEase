// ASSETS

// STYLES
import { GlobalStyles } from "./GlobalStyles.style";
import { AppContainer } from "./App.styles";

// LIBRARIES

// MISC

// COMPONENTS
import Sidemenu from "./components/sidemenu/Sidemenu";
import Homepage from "./components/pages/Homepage/Homepage";
import About from "./components/pages/About/About";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Contact from "./components/pages/Contact/Contact";
import { useState } from "react";

// CONFIGURATION
const App = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS
  const [page, setPage] = useState("home");

  // LIFE CYCLE

  // EVENT HANDLERS
  const handleSwitchPage = (index) => {
    setPage(index);

    console.log("changed to", index, "page");
  };

  return (
    <AppContainer>
      <GlobalStyles />

      {page === "home" && <Homepage />}
      {page === "about" && <About />}
      {page === "portfolio" && <Portfolio />}
      {page === "contact" && <Contact />}

      <Sidemenu handleSwitchPage={handleSwitchPage} />
    </AppContainer>
  );
};

export default App;
