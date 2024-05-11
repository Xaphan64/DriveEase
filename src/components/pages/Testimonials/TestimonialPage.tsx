// ASSETS
import gordonFreeman from "../../assets/gordonFreeman.jpg";
import arthurMorgan from "../../assets/arthurMorgan.jpg";

// STYLES
import { StyledTextContainer } from "../About/About.style";
import { StyledText } from "../Homepage/Homepage.style";
import { StyledTestimonial, StyledTestimonialContainer } from "./Testimanoals.style";

// LIBRARIES

// MISC

// COMPONENTS
import TestimonialCard from "../../cards/TestimonialCard/TestimonialCard";

// CONFIGURATION
const TestimonialPage = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <StyledTestimonial>
      <StyledTextContainer width="680px" $mediaQuery="700px" $alignItems="center">
        <StyledText fontSize="20px">Reviewed by People</StyledText>

        <StyledText fontSize="32px" fontWeight="bold">
          Client's Testimonials
        </StyledText>

        <StyledText fontSize="16px" color="lightgray">
          Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients
          have experienced our service and results, and they're eager to share their positive experiences with you.
        </StyledText>
      </StyledTextContainer>

      <StyledTestimonialContainer>
        <TestimonialCard
          text={`"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable."`}
          name="Gordon Freeman"
          location="New Mexico"
          image={gordonFreeman}
        />

        <TestimonialCard
          text={`"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"`}
          name="Arthur Morgan"
          location="Austin Texas"
          image={arthurMorgan}
        />
      </StyledTestimonialContainer>
    </StyledTestimonial>
  );
};

export default TestimonialPage;
