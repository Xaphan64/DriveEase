// ASSETS
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

// STYLES
import { StyledTestimonialCardContainer } from "./TestimonialCard.style";
import { StyledTestimonialContainer, StyledTestimonialText } from "./TestimonialCard.style";

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
type TestimonialCardProps = {
  text: any;
  image: string;
  name: string;
  location: string;
};

const TestimonialCard = (props: TestimonialCardProps) => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <StyledTestimonialCardContainer>
      <StyledTestimonialText fontSize="20px">{props.text}</StyledTestimonialText>

      <StyledTestimonialContainer $justifyContent="space-between" $alignitems="center">
        <StyledTestimonialContainer $alignitems="center" $gap="8px">
          <StyledTestimonialContainer>
            <img src={props.image} alt="" />
          </StyledTestimonialContainer>

          <StyledTestimonialContainer $flexDirection="column" $gap="4px">
            <StyledTestimonialText fontWeight="bold">{props.name}</StyledTestimonialText>

            <StyledTestimonialText>{props.location}</StyledTestimonialText>
          </StyledTestimonialContainer>
        </StyledTestimonialContainer>

        <StyledTestimonialContainer>
          <FormatQuoteIcon />
        </StyledTestimonialContainer>
      </StyledTestimonialContainer>
    </StyledTestimonialCardContainer>
  );
};

export default TestimonialCard;
