// ASSETS
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

// STYLES
import { StyledInputGrid, StyledInputText, StyledInputsContainer } from "./Inputs.style";

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
const Inputs = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <StyledInputsContainer $padding="32px 48px" $flexDirection="column" $gap="16px" $margin="32px">
      <StyledInputText fontSize="26px" fontWeight="bold">
        Book a car
      </StyledInputText>

      <StyledInputGrid>
        <StyledInputsContainer $flexDirection="column" $gap="8px">
          <StyledInputsContainer $gap="4px" alignItems="center">
            <DirectionsCarIcon />

            <StyledInputsContainer>
              <StyledInputText fontWeight="bold" $textTransform="capitalize">
                select your car type
              </StyledInputText>

              <StyledInputText fontWeight="bold" color="#f2613f">
                *
              </StyledInputText>
            </StyledInputsContainer>
          </StyledInputsContainer>

          <input />
        </StyledInputsContainer>

        <div>pick-up</div>

        <div>drop-off</div>

        <div>pick-up date</div>

        <div>drop-off date</div>

        <div>search button</div>
      </StyledInputGrid>
    </StyledInputsContainer>
  );
};

export default Inputs;
