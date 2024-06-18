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
import BookModal from "./BookModal";

// COMPONENTS

// CONFIGURATION
const Inputs = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS
  const [inputError, setInputError] = useState(false);
  const [modal, setModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState({ brand: "", model: "", pngImage: "" });
  const { inputValues, handleInputChange } = useForm({
    carType: "",
    pickLocation: "",
    dropLocation: "",
    pickDate: "",
    dropDate: "",
    pickTime: "",
    dropTime: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    age: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
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
      setInputError(false);
      setModal(true);

      const selectedVehicle = VehicleList.find(
        (vehicle) => `${vehicle.brand} ${vehicle.model}` === inputValues.carType
      );

      if (selectedVehicle) {
        setSelectedCar({
          brand: selectedVehicle.brand,
          model: selectedVehicle.model,
          pngImage: selectedVehicle.pngImage,
        });
      }
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
      $backgroundColor="#232627"
    >
      <StyledInputText fontSize="26px" fontWeight="bold">
        Book a car
      </StyledInputText>

      {inputError && (
        <StyledErrorMessage>
          <StyledInputText color="#e1868f">All fields required!</StyledInputText>

          <StyledCancelButton onClick={() => setInputError(false)} color="#e1868f">
            <CloseIcon />
          </StyledCancelButton>
        </StyledErrorMessage>
      )}

      <StyledInputGrid>
        <StyledInputsContainer $flexDirection="column" $gap="4px">
          <StyledInputsContainer $gap="4px" $alignItems="center">
            <DirectionsCarIcon />

            <StyledInputsContainer $gap="4px">
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

            <StyledInputsContainer $gap="4px">
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

            <StyledInputsContainer $gap="4px">
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

            <StyledInputsContainer $gap="4px">
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

            <StyledInputsContainer $gap="4px">
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

      {modal && (
        <BookModal
          selectedCar={selectedCar}
          inputValues={inputValues}
          setModal={setModal}
          handleInputChange={handleInputChange}
        />
      )}
    </StyledInputsContainer>
  );
};

export default Inputs;
