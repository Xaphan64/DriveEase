// ASSETS
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import chooseCars from "../../../../assets/chooseCars.png";

// STYLES
import { StyledButton } from "../../../../atoms/Button/Button.style";
import { StyledChooseContainer, StyledChooseImage, StyledChooseSvg, StyledChooseText } from "./Choose.styled";

// LIBRARIES
import { useNavigate } from "react-router-dom";

// MISC

// COMPONENTS

// CONFIGURATION
const Choose = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS
  const navigate = useNavigate();

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <StyledChooseContainer $flexDirection="column">
      <StyledChooseImage>
        <img src={chooseCars} alt="" />
      </StyledChooseImage>

      <StyledChooseContainer $justifyContent="space-evenly" $mediaQuery="1040px">
        <StyledChooseContainer $flexDirection="column" $gap="24px" $mediaQuery="1040px">
          <StyledChooseText fontSize="28px" fontWeight="bold">
            Why Choose Us
          </StyledChooseText>
          <StyledChooseText fontSize="48px" fontWeight="bold" $maxWidth="550px">
            Best valued deals you will ever find
          </StyledChooseText>
          <StyledChooseText $maxWidth="550px" color="lightgray" $lineHeight="1.5">
            Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with
            the best value for your money, so you can enjoy top-quality services and products without breaking the bank.
            Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save
            big.
          </StyledChooseText>

          <StyledButton
            type="button"
            onClick={() => navigate("/about")}
            $backgroundColor="#f2613f"
            hoverColor="#ffffff"
            $hoverBackgroundColor="#fa4226"
            width="200px"
          >
            Find Details <NavigateNextIcon />
          </StyledButton>
        </StyledChooseContainer>

        <StyledChooseContainer $flexDirection="column" $gap="32px">
          <StyledChooseContainer $alignItems="center" $gap="8px">
            <StyledChooseSvg>
              <EmojiTransportationIcon />
            </StyledChooseSvg>

            <StyledChooseContainer $flexDirection="column" $gap="8px">
              <StyledChooseText fontWeight="bold" fontSize="26px">
                Cross Country Drive
              </StyledChooseText>

              <StyledChooseText color="lightgray" $maxWidth="300px">
                Take your driving experience to the next level with our top-notch vehicles for your cross-country
                adventures.
              </StyledChooseText>
            </StyledChooseContainer>
          </StyledChooseContainer>

          <StyledChooseContainer $alignItems="center" $gap="8px">
            <StyledChooseSvg>
              <MonetizationOnIcon />
            </StyledChooseSvg>

            <StyledChooseContainer $flexDirection="column" $gap="8px">
              <StyledChooseText fontWeight="bold" fontSize="26px">
                All Inclusive Pricing
              </StyledChooseText>

              <StyledChooseText color="lightgray" $maxWidth="300px">
                Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.
              </StyledChooseText>
            </StyledChooseContainer>
          </StyledChooseContainer>

          <StyledChooseContainer $alignItems="center" $gap="8px">
            <StyledChooseSvg>
              <CurrencyExchangeIcon />
            </StyledChooseSvg>

            <StyledChooseContainer $flexDirection="column" $gap="8px">
              <StyledChooseText fontWeight="bold" fontSize="26px">
                No Hidden Charges
              </StyledChooseText>

              <StyledChooseText color="lightgray" $maxWidth="300px">
                Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.
              </StyledChooseText>
            </StyledChooseContainer>
          </StyledChooseContainer>
        </StyledChooseContainer>
      </StyledChooseContainer>
    </StyledChooseContainer>
  );
};

export default Choose;
