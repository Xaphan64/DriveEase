import styled from "styled-components";
import phoneApp from "../../../../assets/phoneApp.png";

export const StyledPhoneContainer = styled.div<PhoneProps>`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection};
  justify-content: ${(props) => props.$justifyContent};
  gap: ${(props) => props.$gap};
  padding: ${(props) => props.$padding};

  img {
    width: 300px;
    height: 100px;
    border: 2px solid gray;
    border-radius: 16px;
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    align-items: center;
  }

  @media screen and (max-width: ${(props) => props.$mediaQuery}) {
    flex-direction: column;
  }
`;

export const StyledPhoneImage = styled.div`
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-color: black;
  opacity: 1;
  width: 100%;
  height: 610px;
  position: absolute;
  right: 0;
  z-index: -1;

  @media screen and (min-width: 801px) {
    background-image: url(${phoneApp});
  }
`;

export const StyledPhoneText = styled.span<PhoneProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  line-height: ${(props) => props.$lineHeight};
  max-width: ${(props) => props.$maxWidth};
  padding: 0 8px;

  @media screen and (max-width: 800px) {
    max-width: 650px;
    text-align: center;
  }
`;

type PhoneProps = {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  $lineHeight?: string;
  $flexDirection?: string;
  $justifyContent?: string;
  $gap?: string;
  $padding?: string;
  $maxWidth?: string;
  $mediaQuery?: string;
};
