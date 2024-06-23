import styled from "styled-components";

export const StyledChooseContainer = styled.div<ChooseProps>`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection};
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};
  gap: ${(props) => props.$gap};
  margin: ${(props) => props.$margin};

  @media screen and (max-width: ${(props) => props.$mediaQuery}) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
    text-align: center;
  }

  @media screen and (max-width: ${(props) => props.$mediaQueryMargin}) {
    margin-bottom: 50px;
  }

  @media screen and (max-width: ${(props) => props.$mediaQueryPadding}) {
    padding: 0 8px;
  }
`;

export const StyledChooseImage = styled.div`
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const StyledChooseText = styled.span<ChooseProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  max-width: ${(props) => props.$maxWidth};
  line-height: ${(props) => props.$lineHeight};

  @media screen and (max-width: ${(props) => props.$mediaQueryText}) {
    padding: 0 16px;
  }
`;

export const StyledChooseSvg = styled.svg`
  width: 100px;
  height: 100px;
  background-color: #d3d3d3;
  color: #f2613f;
  border-radius: 50%;
  padding: 8px;

  @media screen and (max-width: 420px) {
    max-width: 75px;
    height: 75px;
  }
`;

type ChooseProps = {
  $flexDirection?: string;
  $justifyContent?: string;
  $gap?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  $maxWidth?: string;
  $lineHeight?: string;
  $alignItems?: string;
  $mediaQuery?: string;
  $margin?: string;
  $mediaQueryMargin?: string;
  $mediaQueryText?: string;
  $mediaQueryPadding?: string;
};
