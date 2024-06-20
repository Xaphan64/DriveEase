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
  StyledModalGrid,
  StyledModalImage,
  StyledModalInput,
  StyledTimeInput,
} from "./Inputs.style";
import { StyledModalButton } from "../../../../atoms/Button/Button.style";

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
type BookModalProps = {
  selectedCar: any;
  inputValues: any;
  setModal: any;
  handleInputChange: any;
  handleModalSubmit: any;
  modalError: any;
};

const BookModal: React.FC<BookModalProps> = ({
  selectedCar,
  inputValues,
  setModal,
  handleInputChange,
  handleModalSubmit,
  modalError,
}) => {
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
                    $error={modalError.pickTime}
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
                    $error={modalError.dropTime}
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

        <StyledInputsContainer $padding="24px 16px" $flexDirection="column" $gap="16px">
          <StyledInputText $textTransform="uppercase" fontWeight="bold" fontSize="20px" color="#f2613f">
            personal information
          </StyledInputText>

          <StyledModalGrid $gridColumns="1fr 1fr">
            <StyledInputsContainer $flexDirection="column" $gap="8px">
              <StyledInputsContainer $gap="4px">
                <StyledInputText $textTransform="capitalize" color="gray" fontWeight="bold">
                  first name
                </StyledInputText>

                <StyledInputText fontWeight="bold" color="#f2613f">
                  *
                </StyledInputText>
              </StyledInputsContainer>

              <StyledModalInput
                name="firstName"
                value={inputValues.firstName}
                onChange={handleInputChange}
                placeholder="Enter your first name"
                $error={modalError.firstName}
              />

              <StyledInputText fontSize="10px" $wordSpacing="-0.5px">
                This field is required.
              </StyledInputText>
            </StyledInputsContainer>

            <StyledInputsContainer $flexDirection="column" $gap="8px">
              <StyledInputsContainer $gap="4px">
                <StyledInputText $textTransform="capitalize" color="gray" fontWeight="bold">
                  last name
                </StyledInputText>

                <StyledInputText fontWeight="bold" color="#f2613f">
                  *
                </StyledInputText>
              </StyledInputsContainer>

              <StyledModalInput
                name="lastName"
                value={inputValues.lastName}
                onChange={handleInputChange}
                placeholder="Enter your last name"
                $error={modalError.lastName}
              />

              <StyledInputText fontSize="10px" $wordSpacing="-0.5px">
                This field is required.
              </StyledInputText>
            </StyledInputsContainer>

            <StyledInputsContainer $flexDirection="column" $gap="8px">
              <StyledInputsContainer $gap="4px">
                <StyledInputText $textTransform="capitalize" color="gray" fontWeight="bold">
                  phone number
                </StyledInputText>

                <StyledInputText fontWeight="bold" color="#f2613f">
                  *
                </StyledInputText>
              </StyledInputsContainer>

              <StyledModalInput
                name="phoneNumber"
                value={inputValues.phoneNumber}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                $error={modalError.phoneNumber}
              />

              <StyledInputText fontSize="10px" $wordSpacing="-0.5px">
                This field is required.
              </StyledInputText>
            </StyledInputsContainer>

            <StyledInputsContainer $flexDirection="column" $gap="8px">
              <StyledInputsContainer $gap="4px">
                <StyledInputText $textTransform="capitalize" color="gray" fontWeight="bold">
                  age
                </StyledInputText>

                <StyledInputText fontWeight="bold" color="#f2613f">
                  *
                </StyledInputText>
              </StyledInputsContainer>

              <StyledModalInput
                name="age"
                value={inputValues.age}
                onChange={handleInputChange}
                placeholder="Enter your age"
                $error={modalError.age}
              />

              <StyledInputText fontSize="10px" $wordSpacing="-0.5px">
                This field is required.
              </StyledInputText>
            </StyledInputsContainer>
          </StyledModalGrid>

          <StyledModalGrid $gridColumns="1fr">
            <StyledInputsContainer $flexDirection="column" $gap="8px">
              <StyledInputsContainer $gap="4px">
                <StyledInputText $textTransform="capitalize" color="gray" fontWeight="bold">
                  email
                </StyledInputText>

                <StyledInputText fontWeight="bold" color="#f2613f">
                  *
                </StyledInputText>
              </StyledInputsContainer>

              <StyledModalInput
                name="email"
                value={inputValues.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                $error={modalError.email}
              />

              <StyledInputText fontSize="10px" $wordSpacing="-0.5px">
                This field is required.
              </StyledInputText>
            </StyledInputsContainer>

            <StyledInputsContainer $flexDirection="column" $gap="8px">
              <StyledInputsContainer $gap="4px">
                <StyledInputText $textTransform="capitalize" color="gray" fontWeight="bold">
                  address
                </StyledInputText>

                <StyledInputText fontWeight="bold" color="#f2613f">
                  *
                </StyledInputText>
              </StyledInputsContainer>

              <StyledModalInput
                name="address"
                value={inputValues.address}
                onChange={handleInputChange}
                placeholder="Enter your street address"
                $error={modalError.address}
              />

              <StyledInputText fontSize="10px" $wordSpacing="-0.5px">
                This field is required.
              </StyledInputText>
            </StyledInputsContainer>
          </StyledModalGrid>

          <StyledModalGrid $gridColumns="1fr 1fr">
            <StyledInputsContainer $flexDirection="column" $gap="8px">
              <StyledInputsContainer $gap="4px">
                <StyledInputText $textTransform="capitalize" color="gray" fontWeight="bold">
                  city
                </StyledInputText>

                <StyledInputText fontWeight="bold" color="#f2613f">
                  *
                </StyledInputText>
              </StyledInputsContainer>

              <StyledModalInput
                name="city"
                value={inputValues.city}
                onChange={handleInputChange}
                placeholder="Enter your city"
                $error={modalError.city}
              />

              <StyledInputText fontSize="10px" $wordSpacing="-0.5px">
                This field is required.
              </StyledInputText>
            </StyledInputsContainer>

            <StyledInputsContainer $flexDirection="column" $gap="8px">
              <StyledInputsContainer $gap="4px">
                <StyledInputText $textTransform="capitalize" color="gray" fontWeight="bold">
                  zip code
                </StyledInputText>

                <StyledInputText fontWeight="bold" color="#f2613f">
                  *
                </StyledInputText>
              </StyledInputsContainer>

              <StyledModalInput
                name="zipCode"
                value={inputValues.zipCode}
                onChange={handleInputChange}
                placeholder="Enter your zip code"
              />

              <StyledInputText fontSize="10px" $wordSpacing="-0.5px">
                This field is required.
              </StyledInputText>
            </StyledInputsContainer>
          </StyledModalGrid>
        </StyledInputsContainer>

        <StyledModalButton
          type="submit"
          onClick={(event) => handleModalSubmit(event)}
          $backgroundColor="#f2613f"
          hoverColor="#ffffff"
          $hoverBackgroundColor="#fa4226"
        >
          Reserve Now
        </StyledModalButton>
      </StyledModal>
    </StyledModalBackground>
  );
};

export default BookModal;
