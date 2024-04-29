// ASSETS
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

// STYLES
import { StyledFooterContact, StyledFooterContainer, StyledFooterForm, StyledFooterItem } from "./Footer.style";
import { StyledFooterText, StyledFooterTitle } from "./Footer.style";
import { OrangeButton } from "../../atoms/Button/Button.style";
import { StyledInput } from "../../atoms/Input/Input.style";
import { useForm } from "../../hooks/useForm";

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION

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
    <StyledFooterContainer>
      <StyledFooterItem>
        <StyledFooterTitle>
          EASE
          <span>Drive</span>
        </StyledFooterTitle>

        <StyledFooterText color="#9e9689" width="300px">
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

        <StyledFooterText color="#9e9689" width="300px">
          This project was made by Alexandru-Daniel Sarbu in React using Typescript and Styled Components
        </StyledFooterText>
      </StyledFooterItem>

      <StyledFooterItem>
        <StyledFooterTitle $textTransform="uppercase">working hours</StyledFooterTitle>

        <StyledFooterText width="216px">Mon - Fri: 8:00 - 20:00</StyledFooterText>

        <StyledFooterText width="216px">Sat: 9:00 - 17:00</StyledFooterText>

        <StyledFooterText width="216px">Sun: Closed</StyledFooterText>
      </StyledFooterItem>

      <StyledFooterItem>
        <StyledFooterTitle $textTransform="uppercase">subscription</StyledFooterTitle>

        <StyledFooterText width="300px">Subscribe your Email address for latest news & updates.</StyledFooterText>

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
    </StyledFooterContainer>
  );
};

export default Footer;
