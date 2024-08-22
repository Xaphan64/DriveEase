// ASSETS

// STYLES
import { HomepageCardContainer, HomepageCardTable, HomepageCardText, HomepageVerticalLine } from "./HomepageCard.style";
import { StyledModalButton } from "../../atoms/Button/Button.style";

// LIBRARIES

// MISC
import { VehicleList } from "../VehicleCard/VehicleList";

// COMPONENTS

// CONFIGURATION
type HomepageCardProps = {
  index: number;
};

const HomepageCard: React.FC<HomepageCardProps> = ({ index }) => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <HomepageCardContainer $flexDirection="column" width="300px" $gap="16px">
      <HomepageCardContainer $flexDirection="column">
        <HomepageCardContainer
          $backgroundColor="#f2613f"
          $gap="8px"
          $allignItems="center"
          $padding="4px 8px"
          $justifyContent="center"
        >
          <HomepageCardText fontSize="32px" fontWeight="bold">
            {VehicleList[index].price}
          </HomepageCardText>
          <HomepageCardText fontSize="22px">/ rent per day</HomepageCardText>
        </HomepageCardContainer>

        <HomepageCardTable>
          <HomepageCardContainer
            width="100%"
            $justifyContent="space-evenly"
            $allignItems="center"
            $padding="8px 0"
            $borderBottom="2px solid #655e53"
          >
            <HomepageCardText color="lightgray" width="50%">
              Brand
            </HomepageCardText>
            <HomepageVerticalLine />
            <HomepageCardText color="lightgray" width="50%">
              {VehicleList[index].brand}
            </HomepageCardText>
          </HomepageCardContainer>

          <HomepageCardContainer
            width="100%"
            $justifyContent="space-evenly"
            $allignItems="center"
            $padding="8px 0"
            $borderBottom="2px solid #655e53"
          >
            <HomepageCardText color="lightgray" width="50%">
              Model
            </HomepageCardText>
            <HomepageVerticalLine />
            <HomepageCardText color="lightgray" width="50%">
              {VehicleList[index].model}
            </HomepageCardText>
          </HomepageCardContainer>

          <HomepageCardContainer
            width="100%"
            $justifyContent="space-evenly"
            $allignItems="center"
            $padding="8px 0"
            $borderBottom="2px solid #655e53"
          >
            <HomepageCardText color="lightgray" width="50%">
              Year
            </HomepageCardText>
            <HomepageVerticalLine />
            <HomepageCardText color="lightgray" width="50%">
              {VehicleList[index].year}
            </HomepageCardText>
          </HomepageCardContainer>

          <HomepageCardContainer
            width="100%"
            $justifyContent="space-evenly"
            $allignItems="center"
            $padding="8px 0"
            $borderBottom="2px solid #655e53"
          >
            <HomepageCardText color="lightgray" width="50%">
              AC
            </HomepageCardText>
            <HomepageVerticalLine />
            <HomepageCardText color="lightgray" width="50%">
              {VehicleList[index].ac}
            </HomepageCardText>
          </HomepageCardContainer>

          <HomepageCardContainer
            width="100%"
            $justifyContent="space-evenly"
            $allignItems="center"
            $padding="8px 0"
            $borderBottom="2px solid #655e53"
          >
            <HomepageCardText color="lightgray" width="50%">
              Transmission
            </HomepageCardText>
            <HomepageVerticalLine />
            <HomepageCardText color="lightgray" width="50%">
              {VehicleList[index].gear}
            </HomepageCardText>
          </HomepageCardContainer>

          <HomepageCardContainer width="100%" $justifyContent="space-evenly" $allignItems="center" $padding="8px 0">
            <HomepageCardText color="lightgray" width="50%">
              Fuel
            </HomepageCardText>
            <HomepageVerticalLine />
            <HomepageCardText color="lightgray" width="50%">
              {VehicleList[index].fuel}
            </HomepageCardText>
          </HomepageCardContainer>
        </HomepageCardTable>
      </HomepageCardContainer>

      <StyledModalButton
        type="button"
        onClick={() => (window.location.href = "#book-ride")}
        $backgroundColor="#f2613f"
        hoverColor="#ffffff"
        $hoverBackgroundColor="#fa4226"
        width="300px"
      >
        RESERVE NOW
      </StyledModalButton>
    </HomepageCardContainer>
  );
};

export default HomepageCard;
