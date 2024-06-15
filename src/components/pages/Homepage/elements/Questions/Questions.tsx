// ASSETS

// STYLES
import { StyledQuestionsContainer, StyledQuestionsImage, StyledQuestionsText } from "./Questions.style";

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
const Questions = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <StyledQuestionsContainer $gap="16px">
      <StyledQuestionsImage />

      <StyledQuestionsText fontSize="24px" fontWeight="bold">
        FAQ
      </StyledQuestionsText>

      <StyledQuestionsText fontSize="48px" fontWeight="bold" $padding="0 8px">
        Frequently Asked Questions
      </StyledQuestionsText>

      <StyledQuestionsText color="lightgray" $padding="0 16px 32px 16px">
        Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and
        Inquiries.
      </StyledQuestionsText>

      <StyledQuestionsContainer $border="1px solid gray" $maxWidth="96%">
        <StyledQuestionsText $padding="8px" $borderBottom="1px solid gray" $backgroundColor="#f2613f" fontSize="20px">
          1. What is special about comparing rental car deals?
        </StyledQuestionsText>

        <StyledQuestionsText $padding="8px" color="lightgray" $backgroundColor="#0c0c0c">
          Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements,
          ensuring you get the most value for your money. By comparing various options, you can find deals that offer
          lower prices, additional services, or better car models. You can find car rental deals by researching online
          and comparing prices from different rental companies.
        </StyledQuestionsText>
      </StyledQuestionsContainer>

      <StyledQuestionsContainer $border="1px solid gray" $maxWidth="96%">
        <StyledQuestionsText $padding="8px" $borderBottom="1px solid gray" $backgroundColor="#f2613f" fontSize="20px">
          2. How do I find the car rental deals?
        </StyledQuestionsText>

        <StyledQuestionsText $padding="8px" color="lightgray" $backgroundColor="#0c0c0c">
          You can find car rental deals by researching online and comparing prices from different rental companies.
          Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental
          options. It is also recommended to sign up for email newsletters and follow rental car companies on social
          media to be informed of any special deals or promotions.
        </StyledQuestionsText>
      </StyledQuestionsContainer>

      <StyledQuestionsContainer $border="1px solid gray" $maxWidth="96%">
        <StyledQuestionsText $padding="8px" $borderBottom="1px solid gray" $backgroundColor="#f2613f" fontSize="20px">
          3. How do I find such low rental car prices?
        </StyledQuestionsText>

        <StyledQuestionsText $padding="8px" color="lightgray" $backgroundColor="#0c0c0c">
          Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from
          multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental
          car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to
          lower the rental price. Renting from an off-airport location can sometimes result in lower prices.
        </StyledQuestionsText>
      </StyledQuestionsContainer>
    </StyledQuestionsContainer>
  );
};

export default Questions;
