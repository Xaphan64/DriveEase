// ASSETS

// STYLES
import GlobalStyles from "./components/GlobalStyles";

// LIBRARIES
import { BrowserRouter, Route, Routes } from "react-router-dom";

// MISC

// COMPONENTS
import Layout from "./components/layout/Layout/Layout";
import Homepage from "./components/pages/Homepage/Homepage";
import About from "./components/pages/About/About";
import VehicleModels from "./components/pages/VehicleModels/VehicleModels";
import Testimonials from "./components/pages/Testimonials/Testimonials";
import Team from "./components/pages/Team/Team";
import Contact from "./components/pages/Contact/Contact";

// CONFIGURATION
const App = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/models" element={<VehicleModels />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
