// ASSETS
import CloseIcon from "@mui/icons-material/Close";
import ErrorIcon from "@mui/icons-material/Error";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TodayIcon from "@mui/icons-material/Today";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";

// STYLES
import {
  StyledCancelButton,
  StyledInputText,
  StyledInputsContainer,
  StyledModal,
  StyledModalBackground,
  StyledModalImage,
  StyledTimeInput,
} from "./Inputs.style";

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
type BookModalProps = {
  selectedCar: any;
  inputValues: any;
  setModal: any;
  handleInputChange: any;
};

const BookModal: React.FC<BookModalProps> = ({ selectedCar, inputValues, setModal, handleInputChange }) => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log("pick up:", inputValues.pickTime, "drop-off:", inputValues.dropTime);
  };

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

        <StyledInputsContainer $flexDirection="column" $padding="24px 16px" $gap="8px" $backgroundColor="#420b00">
          <StyledInputText color="#f2613f" fontSize="20px" fontWeight="bold" $alignItems="center" $gap="4px">
            <ErrorIcon />
            Upon completing this reservation enquiry, you will receive:
          </StyledInputText>

          <StyledInputText color="gray" fontSize="18px" fontWeight="bold">
            Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.
          </StyledInputText>
        </StyledInputsContainer>

        <StyledInputsContainer $padding="24px 16px" $justifyContent="space-between" $borderBottom="1px solid gray">
          <StyledInputsContainer $flexDirection="column" $gap="24px">
            <StyledInputText color="#f2613f" fontSize="20px" fontWeight="bold">
              Location & Date
            </StyledInputText>

            <StyledInputsContainer $flexDirection="row" $gap="0px">
              <LocationOnIcon />

              <StyledInputsContainer $flexDirection="column" $gap="4px">
                <StyledInputText color="#ffffff" fontSize="18px" fontWeight="bold" $alignItems="center" $gap="4px">
                  Pick-Up Date & Time
                </StyledInputText>

                <StyledInputText color="gray" $gap="4px">
                  {inputValues.pickDate} /
                  <StyledTimeInput
                    type="time"
                    name="pickTime"
                    value={inputValues.pickTime}
                    onChange={handleInputChange}
                  />
                </StyledInputText>
              </StyledInputsContainer>
            </StyledInputsContainer>

            <StyledInputsContainer $flexDirection="row" $gap="0px">
              <LocationOnIcon />

              <StyledInputsContainer $flexDirection="column" $gap="4px">
                <StyledInputText color="#ffffff" fontSize="18px" fontWeight="bold" $alignItems="center" $gap="4px">
                  Drop-Off Date & Time
                </StyledInputText>

                <StyledInputText color="gray" $gap="4px">
                  {inputValues.dropDate} /
                  <StyledTimeInput
                    type="time"
                    name="dropTime"
                    value={inputValues.dropTime}
                    onChange={handleInputChange}
                  />
                </StyledInputText>
              </StyledInputsContainer>
            </StyledInputsContainer>

            <StyledInputsContainer $flexDirection="row" $gap="4px">
              <TodayIcon />

              <StyledInputsContainer $flexDirection="column" $gap="4px">
                <StyledInputText color="#ffffff" fontSize="18px" fontWeight="bold" $alignItems="center" $gap="4px">
                  Pick-Up Location
                </StyledInputText>

                <StyledInputText color="gray" $gap="4px">
                  {inputValues.pickLocation}
                </StyledInputText>
              </StyledInputsContainer>
            </StyledInputsContainer>

            <StyledInputsContainer $flexDirection="row" $gap="4px">
              <InsertInvitationIcon />

              <StyledInputsContainer $flexDirection="column" $gap="4px">
                <StyledInputText color="#ffffff" fontSize="18px" fontWeight="bold" $alignItems="center" $gap="4px">
                  Drop-Off Location
                </StyledInputText>

                <StyledInputText color="gray" $gap="4px">
                  {inputValues.dropLocation}
                </StyledInputText>
              </StyledInputsContainer>
            </StyledInputsContainer>
          </StyledInputsContainer>

          <StyledInputsContainer $flexDirection="column" $gap="24px">
            <StyledInputsContainer $gap="4px">
              <StyledInputText fontSize="20px" fontWeight="bold">
                Car -
              </StyledInputText>

              <StyledInputText fontSize="20px" fontWeight="bold" color="#f2613f">
                {selectedCar.brand} {selectedCar.model}
              </StyledInputText>
            </StyledInputsContainer>

            <StyledModalImage src={selectedCar.pngImage} alt="" />
          </StyledInputsContainer>
        </StyledInputsContainer>

        <div>other inputs</div>

        <button onClick={handleSubmit} type="submit">
          submit
        </button>
      </StyledModal>
    </StyledModalBackground>
  );
};

export default BookModal;
