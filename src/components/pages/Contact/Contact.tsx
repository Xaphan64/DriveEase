// ASSETS
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DraftsIcon from "@mui/icons-material/Drafts";

// STYLES
import { StyledContainer, StyledText } from "../About/About.style";
import { ContactContainer, ContactForm } from "./Contact.style";

// LIBRARIES

// MISC

// COMPONENTS
import ContactCard from "../../cards/ContactCard/ContactCard";
import HeaderCard from "../../cards/HeaderCard/HeaderCard";
import { StyledInput, StyledTextarea } from "../../atoms/Input/Input.style";
import { useForm } from "../../hooks/useForm";
import { StyledButton } from "../../atoms/Button/Button.style";

// CONFIGURATION
const Contact = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS
  const { inputValues, handleInputChange, resetForm } = useForm({
    fullName: "",
    email: "",
    text: "",
  });

  // LIFE CYCLE

  // EVENT HANDLERS
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log("The following data was submitted: ", inputValues);

    resetForm();
  };

  return (
    <StyledContainer>
      <HeaderCard />

      <ContactContainer width="100%" alignitems="center" justifyContent="space-evenly" gap="32px" mediaQuery="1050px">
        <ContactContainer $flexDirection="column" $maxWidth="400px" gap="24px" padding="0 16px">
          <StyledText fontSize="40px" fontWeight="bold">
            Need additional information?
          </StyledText>

          <StyledText color="lightgray" $lineHeight="1.5">
            Feel free to reach out to us via phone, email, or by filling out the contact form. Our friendly and
            knowledgeable team is ready to assist you with any inquiries you may have. We strive to respond to all
            inquiries promptly and provide personalized assistance tailored to your needs.
          </StyledText>

          <ContactContainer $flexDirection="column" gap="8px" mediaQuery="1050px">
            <ContactContainer gap="8px" alignitems="center">
              <PhoneInTalkIcon />
              <StyledText fontSize="18px">(0123) 456 789</StyledText>
            </ContactContainer>

            <ContactContainer gap="8px" alignitems="center">
              <MailOutlineIcon />
              <StyledText fontSize="18px">easedrive@gmail.com</StyledText>
            </ContactContainer>

            <ContactContainer gap="8px" alignitems="center">
              <LocationOnIcon />
              <StyledText fontSize="18px">Bucharest, Romania</StyledText>
            </ContactContainer>
          </ContactContainer>
        </ContactContainer>

        {/* <ContactContainer $flexDirection="column" $maxWidth="600px" width="100%" padding="0 16px"> */}
        <ContactForm>
          <ContactContainer $flexDirection="column" gap="8px">
            <ContactContainer gap="4px">
              <StyledText fontSize="18px" fontWeight="bold">
                Full Name
              </StyledText>
              <StyledText fontSize="18px" fontWeight="bold" color="#f2613f">
                *
              </StyledText>
            </ContactContainer>

            <StyledInput
              type="text"
              name="fullName"
              value={inputValues.fullName}
              placeholder="Ex. Popescu Cristian"
              onChange={handleInputChange}
              maxWidth="600px"
              required
            />
          </ContactContainer>

          <ContactContainer $flexDirection="column" gap="8px">
            <ContactContainer gap="4px">
              <StyledText fontSize="18px" fontWeight="bold">
                Email
              </StyledText>
              <StyledText fontSize="18px" fontWeight="bold" color="#f2613f">
                *
              </StyledText>
            </ContactContainer>

            <StyledInput
              type="email"
              name="email"
              value={inputValues.email}
              placeholder="your email address here"
              onChange={handleInputChange}
              maxWidth="600px"
              required
            />
          </ContactContainer>

          <ContactContainer $flexDirection="column" gap="8px">
            <ContactContainer gap="4px">
              <StyledText fontSize="18px" fontWeight="bold">
                Tell us about it
              </StyledText>
              <StyledText fontSize="18px" fontWeight="bold" color="#f2613f">
                *
              </StyledText>
            </ContactContainer>

            <StyledTextarea
              name="text"
              value={inputValues.text}
              placeholder="Write here..."
              onChange={handleInputChange}
              maxWidth="600px"
              required
            />
          </ContactContainer>

          <StyledButton
            type="submit"
            onClick={handleSubmit}
            backgroundColor="#f2613f"
            hoverColor="#ffffff"
            hoverBackgroundColor="#fa4226"
            svgColor="#ffffff"
          >
            <DraftsIcon />
            send message
          </StyledButton>
        </ContactForm>
      </ContactContainer>

      <ContactCard />
    </StyledContainer>
  );
};

export default Contact;
