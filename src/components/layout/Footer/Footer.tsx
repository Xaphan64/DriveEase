// ASSETS
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

// STYLES
import { StyledContainer } from "../Layout/Layout.style";
import { StyledFooterContact, StyledFooterForm, StyledFooterItem } from "./Footer.style";
import { StyledFooterText, StyledFooterTitle } from "./Footer.style";
import { OrangeButton } from "../../atoms/Button/Button.style";
import { StyledInput } from "../../atoms/Input/Input.style";
import { useForm } from "../../hooks/useForm";

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
export interface FooterProps {
  fontSize?: string;
  fontWeight?: string;
  $textTransform?: string;
  color?: string;
}

const Footer = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS
  const { inputValues, handleInputChange, resetForm } = useForm({
    subscription: "",
  });

  // LIFE CYCLE

  // EVENT HANDLERS
  const handleSubscription = (event: React.FormEvent) => {
    event.preventDefault();

    console.log("The", inputValues.subscription, "was subscribed to the newsletter");

    resetForm();
  };

  return (
    <StyledContainer $padding="80px 24px" $alignItems="flex-start">
      <StyledFooterItem>
        <StyledFooterTitle>
          EASE
          <span>Drive</span>
        </StyledFooterTitle>

        <StyledFooterText color="#9e9689">
          We offer a big range of vehicles for all your driving necesities. We have the perfect car to meet your needs.
        </StyledFooterText>

        <StyledFooterContact>
          <LocalPhoneIcon />

          <span>(0123) 456 789</span>
        </StyledFooterContact>

        <StyledFooterContact>
          <EmailIcon />

          <span>easedrive@gmail.com</span>
        </StyledFooterContact>
      </StyledFooterItem>

      <StyledFooterItem>
        <StyledFooterTitle $textTransform="uppercase">about project</StyledFooterTitle>

        <StyledFooterText color="#9e9689">
          This project was made by Alexandru-Daniel Sarbu in React using Typescript and Styled Components
        </StyledFooterText>
      </StyledFooterItem>

      <StyledFooterItem>
        <StyledFooterTitle $textTransform="uppercase">working hours</StyledFooterTitle>

        <StyledFooterText>Mon - Fri: 8:00 - 20:00</StyledFooterText>

        <StyledFooterText>Sat: 9:00 - 17:00</StyledFooterText>

        <StyledFooterText>Sun: Closed</StyledFooterText>
      </StyledFooterItem>

      <StyledFooterItem>
        <StyledFooterTitle $textTransform="uppercase">subscription</StyledFooterTitle>

        <StyledFooterText>Subscribe your Email address for latest news & updates.</StyledFooterText>

        <StyledFooterForm>
          <StyledInput
            type="email"
            name="subscription"
            value={inputValues.subscription}
            placeholder="enter email address"
            onChange={handleInputChange}
            required
          />

          <OrangeButton type="submit" onClick={handleSubscription}>
            subscribe
          </OrangeButton>
        </StyledFooterForm>
      </StyledFooterItem>
    </StyledContainer>
  );
};

export default Footer;
