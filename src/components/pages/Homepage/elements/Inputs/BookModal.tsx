// ASSETS
import CloseIcon from "@mui/icons-material/Close";
import ErrorIcon from "@mui/icons-material/Error";

// STYLES
import {
  StyledCancelButton,
  StyledInputText,
  StyledInputsContainer,
  StyledModal,
  StyledModalBackground,
} from "./Inputs.style";

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
type BookModalProps = {
  selectedCar: any;
  inputValues: any;
  setModal: any;
};

const BookModal: React.FC<BookModalProps> = ({ selectedCar, inputValues, setModal }) => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <StyledModalBackground>
      <StyledModal>
        <StyledInputsContainer $backgroundColor="#f2613f" $padding="16px 8px" $justifyContent="space-between">
          <StyledInputText $textTransform="uppercase" fontWeight="bold" fontSize="24px">
            complete reservation
          </StyledInputText>

          <StyledCancelButton onClick={() => setModal(false)} color="white">
            <CloseIcon />
          </StyledCancelButton>
        </StyledInputsContainer>

        <StyledInputsContainer $flexDirection="column" $padding="8px 16px" $gap="8px" $backgroundColor="#420b00">
          <StyledInputText color="#f2613f" fontSize="20px" fontWeight="bold" $alignItems="center" $gap="4px">
            <ErrorIcon />
            Upon completing this reservation enquiry, you will receive:
          </StyledInputText>

          <StyledInputText color="gray" fontSize="18px" fontWeight="bold">
            Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.
          </StyledInputText>
        </StyledInputsContainer>

        <div>
          <p>
            Car Type: {selectedCar.brand} {selectedCar.model}
          </p>

          <img src={selectedCar.image} alt="" style={{ width: "100px", height: "100px" }} />

          <p>Pick Location: {inputValues.pickLocation}</p>
          <p>Drop Location: {inputValues.dropLocation}</p>
          <p>Pick Date: {inputValues.pickDate}</p>
          <p>Drop Date: {inputValues.dropDate}</p>
        </div>
      </StyledModal>
    </StyledModalBackground>
  );
};

export default BookModal;
