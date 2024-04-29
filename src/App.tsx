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
        <Route path="/login" element={<h1>login page</h1>} />
        <Route path="/register" element={<h1>register page</h1>} />

        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/models" element={<h1>vehicle models</h1>} />
          <Route path="/testimonials" element={<h1>testimonials</h1>} />
          <Route path="/team" element={<h1>our team</h1>} />
          <Route path="/contact" element={<h1>contact</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
