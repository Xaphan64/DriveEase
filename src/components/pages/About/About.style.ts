import styled from "styled-components";

export const StyledContainer = styled.div`
  position: static;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  width: 100%;
`;

export const StyledAbout = styled.div<AboutProps>`
  display: flex;
  gap: ${(props) => props.$gap};
  flex-direction: ${(props) => props.$flexDirection};
  text-align: ${(props) => props.$textAlign};
  margin: ${(props) => props.$margin};

  @media screen and (max-width: 1050px) {
    flex-direction: column;
    margin: 50px 0;
  }
`;

export const StyledAboutImage = styled.div`
  display: flex;
  align-self: flex-end;

  img {
    width: 500px;
    height: 460px;
    object-fit: cover;

    @media screen and (max-width: 500px) {
      width: 100%;
      height: auto;
      padding: 0 8px;
    }
  }

  @media screen and (max-width: 1050px) {
    align-self: center;
  }
`;

export const StyledTextContainer = styled.div<AboutProps>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: ${(props) => props.width};
  align-items: ${(props) => props.$alignItems};

  @media screen and (max-width: ${(props) => props.$mediaQuery}) {
    width: 100%;
    padding: 0 8px;
  }
`;

export const StyledCardContainer = styled.div<AboutProps>`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: ${(props) => props.$mediaQuery}) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const StyledText = styled.span<AboutProps>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.$lineHeight};

  @media screen and (max-width: 1050px) {
    text-align: center;
  }
`;

type AboutProps = {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  $lineHeight?: string;
  $flexDirection?: string;
  $textAlign?: string;
  $gap?: string;
  width?: string;
  $mediaQuery?: string;
  $alignItems?: string;
  $margin?: string;
};
