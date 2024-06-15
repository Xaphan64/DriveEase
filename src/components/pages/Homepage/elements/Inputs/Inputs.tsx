// ASSETS
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TodayIcon from "@mui/icons-material/Today";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import CloseIcon from "@mui/icons-material/Close";

// STYLES
import {
  StyledCancelButton,
  StyledDateInput,
  StyledErrorMessage,
  StyledInputGrid,
  StyledInputText,
  StyledInputsContainer,
  StyledOption,
  StyledSearchButton,
  StyledSelect,
} from "./Inputs.style";

// LIBRARIES
import { useState } from "react";

// MISC
import { useForm } from "../../../../hooks/useForm";
import { CityList, VehicleList } from "../../../../cards/VehicleCard/VehicleList";

// COMPONENTS

// CONFIGURATION
const Inputs = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS
  const [inputError, setInputError] = useState(false);
  const [modal, setModal] = useState(false);
  const { inputValues, handleInputChange } = useForm({
    carType: "",
    pickLocation: "",
    dropLocation: "",
    pickDate: "",
    dropDate: "",
  });

  // LIFE CYCLE

  // EVENT HANDLERS
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (
      inputValues.carType === "" ||
      inputValues.pickLocation === "" ||
      inputValues.dropLocation === "" ||
      inputValues.pickDate === "" ||
      inputValues.dropDate === ""
    ) {
      setInputError(true);
    } else {
      console.log("The input data:", inputValues);
      setInputError(false);
      setModal(true);
    }
  };

  return (
    <StyledInputsContainer
      $padding="32px 48px"
      $flexDirection="column"
      $gap="16px"
      $margin="32px"
      $borderRadius="4px"
      $mediaQuery="400px"
    >
      <StyledInputText fontSize="26px" fontWeight="bold">
        Book a car
      </StyledInputText>

      {inputError && (
        <StyledErrorMessage>
          <StyledInputText color="#e1868f">All fields required!</StyledInputText>

          <StyledCancelButton onClick={() => setInputError(false)}>
            <CloseIcon />
          </StyledCancelButton>
        </StyledErrorMessage>
      )}

      <StyledInputGrid>
        <StyledInputsContainer $flexDirection="column" $gap="4px">
          <StyledInputsContainer $gap="4px" $alignItems="center">
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

          <StyledSelect name="carType" value={inputValues.carType} onChange={handleInputChange}>
            <StyledOption disabled value="">
              Select your car type
            </StyledOption>

            {VehicleList.map((vehicle, index) => (
              <StyledOption key={index}>
                {vehicle.brand} {vehicle.model}
              </StyledOption>
            ))}
          </StyledSelect>
        </StyledInputsContainer>

        <StyledInputsContainer $flexDirection="column" $gap="4px">
          <StyledInputsContainer $gap="4px" $alignItems="center">
            <LocationOnIcon />

            <StyledInputsContainer>
              <StyledInputText fontWeight="bold" $textTransform="capitalize">
                pick-up
              </StyledInputText>

              <StyledInputText fontWeight="bold" color="#f2613f">
                *
              </StyledInputText>
            </StyledInputsContainer>
          </StyledInputsContainer>

          <StyledSelect name="pickLocation" value={inputValues.pickLocation} onChange={handleInputChange}>
            <StyledOption disabled value="">
              Select pick-up location
            </StyledOption>

            {CityList.map((location, index) => (
              <StyledOption key={index}>{location.city}</StyledOption>
            ))}
          </StyledSelect>
        </StyledInputsContainer>

        <StyledInputsContainer $flexDirection="column" $gap="4px">
          <StyledInputsContainer $gap="4px" $alignItems="center">
            <LocationOnIcon />

            <StyledInputsContainer>
              <StyledInputText fontWeight="bold" $textTransform="capitalize">
                drop-off
              </StyledInputText>

              <StyledInputText fontWeight="bold" color="#f2613f">
                *
              </StyledInputText>
            </StyledInputsContainer>
          </StyledInputsContainer>

          <StyledSelect name="dropLocation" value={inputValues.dropLocation} onChange={handleInputChange}>
            <StyledOption disabled value="">
              Select drop-off location
            </StyledOption>

            {CityList.map((location, index) => (
              <StyledOption key={index}>{location.city}</StyledOption>
            ))}
          </StyledSelect>
        </StyledInputsContainer>

        <StyledInputsContainer $flexDirection="column" $gap="4px">
          <StyledInputsContainer $gap="4px" $alignItems="center">
            <TodayIcon />

            <StyledInputsContainer>
              <StyledInputText fontWeight="bold" $textTransform="capitalize">
                pick-up
              </StyledInputText>

              <StyledInputText fontWeight="bold" color="#f2613f">
                *
              </StyledInputText>
            </StyledInputsContainer>
          </StyledInputsContainer>

          <StyledDateInput type="date" name="pickDate" value={inputValues.pickDate} onChange={handleInputChange} />
        </StyledInputsContainer>

        <StyledInputsContainer $flexDirection="column" $gap="4px">
          <StyledInputsContainer $gap="4px" $alignItems="center">
            <InsertInvitationIcon />

            <StyledInputsContainer>
              <StyledInputText fontWeight="bold" $textTransform="capitalize">
                drop-off
              </StyledInputText>

              <StyledInputText fontWeight="bold" color="#f2613f">
                *
              </StyledInputText>
            </StyledInputsContainer>
          </StyledInputsContainer>

          <StyledDateInput type="date" name="dropDate" value={inputValues.dropDate} onChange={handleInputChange} />
        </StyledInputsContainer>

        <StyledSearchButton type="submit" onClick={handleSubmit}>
          Search
        </StyledSearchButton>
      </StyledInputGrid>

      {modal && <div>modal opened</div>}
    </StyledInputsContainer>
  );
};

export default Inputs;
