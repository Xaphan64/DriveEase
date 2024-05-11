import styled from "styled-components";

export const ContactContainer = styled.div<ContactProps>`
  display: flex;
  width: ${(props) => props.width};
  max-width: ${(props) => props.$maxWidth};
  flex-direction: ${(props) => props.$flexDirection};
  align-items: ${(props) => props.$alignitems};
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => props.$gap};
  padding: ${(props) => props.$padding};

  @media screen and (max-width: ${(props) => props.$mediaQuery}) {
    flex-direction: column;
    align-items: center;
  }

  svg {
    width: 32px;
    height: 32px;
    color: #f2613f;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  padding: 0 16px;
  gap: 16px;
`;

type ContactProps = {
  width?: string;
  $alignitems?: string;
  justifyContent?: string;
  $flexDirection?: string;
  $maxWidth?: string;
  $gap?: string;
  $padding?: string;
  $mediaQuery?: string;
};
