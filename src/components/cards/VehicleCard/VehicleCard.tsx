// ASSETS

// STYLES
import { StyledButton } from "../../atoms/Button/Button.style";
import { ButtonContainer, StyledVehicleCardContainer, StyledVehicleImage } from "./VehicleCard.style";
import { StyledVehicleText, StyledVehicleTextContainer } from "./VehicleCard.style";

// LIBRARIES
import { useNavigate } from "react-router-dom";

// MISC

// COMPONENTS

// CONFIGURATION
type VehicleCardProps = {
  image: string;
  brand: string;
  model: string;
  year: string;
  gear: string;
  price: string;
  ranking: string;
  fuel: string;
};

const VehicleCard = (props: VehicleCardProps) => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS
  const navigate = useNavigate();

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <StyledVehicleCardContainer>
      <StyledVehicleImage>
        <img src={props.image} alt="" />
      </StyledVehicleImage>

      <StyledVehicleTextContainer
        $flexDirection="column"
        $justifyContent="space-around"
        $padding="16px 24px"
        height="100%"
      >
        <StyledVehicleTextContainer $flexDirection="column" $gap="8px">
          <StyledVehicleTextContainer $justifyContent="space-between">
            <StyledVehicleText fontSize="32px" fontWeight="bold">
              {props.brand}
            </StyledVehicleText>
            <StyledVehicleText fontSize="32px" fontWeight="bold">
              {props.price} €
            </StyledVehicleText>
          </StyledVehicleTextContainer>

          <StyledVehicleTextContainer $justifyContent="space-between">
            <StyledVehicleText color="lightgray">{props.model}</StyledVehicleText>
            <StyledVehicleText color="lightgray">per day</StyledVehicleText>
          </StyledVehicleTextContainer>
        </StyledVehicleTextContainer>

        <StyledVehicleTextContainer $justifyContent="space-between">
          <StyledVehicleText color="lightgray">{props.year}</StyledVehicleText>
          <StyledVehicleText color="lightgray">{props.ranking}</StyledVehicleText>
        </StyledVehicleTextContainer>

        <StyledVehicleTextContainer $justifyContent="space-between">
          <StyledVehicleText color="lightgray">{props.gear}</StyledVehicleText>
          <StyledVehicleText color="lightgray">{props.fuel}</StyledVehicleText>
        </StyledVehicleTextContainer>
      </StyledVehicleTextContainer>

      <ButtonContainer>
        <StyledButton
          width="316px"
          type="button"
          onClick={() => navigate("/")}
          $backgroundColor="#f2613f"
          hoverColor="#ffffff"
          $hoverBackgroundColor="#fa4226"
        >
          book ride
        </StyledButton>
      </ButtonContainer>
    </StyledVehicleCardContainer>
  );
};

export default VehicleCard;
