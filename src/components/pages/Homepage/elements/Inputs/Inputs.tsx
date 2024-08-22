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
import BookModal from "./BookModal";

// CONFIGURATION
const Inputs = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS
  const [inputError, setInputError] = useState(false);
  const [inputCorfirm, setInputConfirm] = useState(false);
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
  const [modalError, setModalError] = useState({
    pickTime: false,
    dropTime: false,
    firstName: false,
    lastName: false,
    phoneNumber: false,
    age: false,
    email: false,
    address: false,
    city: false,
    zipCode: false,
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
      setInputConfirm(false);
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

  const handleModalSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (
      inputValues.pickTime === "" ||
      inputValues.dropTime === "" ||
      inputValues.firstName === "" ||
      inputValues.lastName === "" ||
      inputValues.phoneNumber === "" ||
      inputValues.age === "" ||
      inputValues.email === "" ||
      inputValues.address === "" ||
      inputValues.city === "" ||
      inputValues.zipCode === ""
    ) {
      setInputConfirm(false);
    } else {
      setInputConfirm(true);
      setInputError(false);
      setModal(false);
    }

    if (inputValues.pickTime === "") {
      setModalError((prevState) => ({
        ...prevState,
        pickTime: true,
      }));
    } else {
      setModalError((prevState) => ({
        ...prevState,
        pickTime: false,
      }));
    }

    if (inputValues.dropTime === "") {
      setModalError((prevState) => ({
        ...prevState,
        dropTime: true,
      }));
    } else {
      setModalError((prevState) => ({
        ...prevState,
        dropTime: false,
      }));
    }

    if (inputValues.firstName === "") {
      setModalError((prevState) => ({
        ...prevState,
        firstName: true,
      }));
    } else {
      setModalError((prevState) => ({
        ...prevState,
        firstName: false,
      }));
    }

    if (inputValues.lastName === "") {
      setModalError((prevState) => ({
        ...prevState,
        lastName: true,
      }));
    } else {
      setModalError((prevState) => ({
        ...prevState,
        lastName: false,
      }));
    }

    if (inputValues.phoneNumber === "") {
      setModalError((prevState) => ({
        ...prevState,
        phoneNumber: true,
      }));
    } else {
      setModalError((prevState) => ({
        ...prevState,
        phoneNumber: false,
      }));
    }

    if (inputValues.age === "") {
      setModalError((prevState) => ({
        ...prevState,
        age: true,
      }));
    } else {
      setModalError((prevState) => ({
        ...prevState,
        age: false,
      }));
    }

    if (inputValues.email === "") {
      setModalError((prevState) => ({
        ...prevState,
        email: true,
      }));
    } else {
      setModalError((prevState) => ({
        ...prevState,
        email: false,
      }));
    }

    if (inputValues.address === "") {
      setModalError((prevState) => ({
        ...prevState,
        address: true,
      }));
    } else {
      setModalError((prevState) => ({
        ...prevState,
        address: false,
      }));
    }

    if (inputValues.city === "") {
      setModalError((prevState) => ({
        ...prevState,
        city: true,
      }));
    } else {
      setModalError((prevState) => ({
        ...prevState,
        city: false,
      }));
    }

    if (inputValues.zipCode === "") {
      setModalError((prevState) => ({
        ...prevState,
        zipCode: true,
      }));
    } else {
      setModalError((prevState) => ({
        ...prevState,
        zipCode: false,
      }));
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
      id="book-ride"
    >
      <StyledInputText fontSize="26px" fontWeight="bold">
        Book a car
      </StyledInputText>

      {inputError && (
        <StyledErrorMessage $backgroundColor="#430c11">
          <StyledInputText color="#e1868f">All fields required!</StyledInputText>

          <StyledCancelButton onClick={() => setInputError(false)} color="#e1868f">
            <CloseIcon />
          </StyledCancelButton>
        </StyledErrorMessage>
      )}

      {inputCorfirm && (
        <StyledErrorMessage $backgroundColor="#205607">
          <StyledInputText color="#a1e68c">Check your email to confirm the reservation!</StyledInputText>

          <StyledCancelButton onClick={() => setInputConfirm(false)} color="#a1e68c">
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
          handleModalSubmit={handleModalSubmit}
          modalError={modalError}
        />
      )}
    </StyledInputsContainer>
  );
};

export default Inputs;
