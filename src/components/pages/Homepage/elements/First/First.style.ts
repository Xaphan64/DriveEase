import styled from "styled-components";

export const StyledFirstContainer = styled.div<FirstProps>`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection};
  gap: ${(props) => props.$gap};
  padding: ${(props) => props.padding};
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.height};
  align-items: ${(props) => props.alignItems};
  position: relative;
  margin: 100px 0;

  @media screen and (max-width: 992px) {
    margin: 50px 0;
  }

  @media screen and (max-width: 800px) {
    max-width: 100%;
    align-items: center;
    align-self: center;
  }

  @media screen and (max-width: ${(props) => props.mediaQuery}) {
    flex-direction: column;
  }
`;

export const StyledFirstText = styled.span<FirstProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};

  @media screen and (max-width: 800px) {
    max-width: 500px;
    text-align: center;
  }
`;

export const StyledImage = styled.img`
  max-width: 50%;
  height: auto;
  position: absolute;
  right: 0;
  bottom: 40%;
  z-index: -1;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

type FirstProps = {
  $flexDirection?: string;
  $gap?: string;
  padding?: string;
  maxWidth?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  height?: string;
  alignItems?: string;
  mediaQuery?: string;
};
