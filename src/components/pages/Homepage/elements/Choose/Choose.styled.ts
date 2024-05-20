import styled from "styled-components";
import chooseCars from "../../../../assets/chooseCars.png";

export const StyledChooseContainer = styled.div<ChooseProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap};
  margin-top: ${(props) => props.marginTop};

  @media screen and (max-width: ${(props) => props.$mediaQuery}) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
    text-align: center;
  }
`;

export const StyledChooseImage = styled.div`
  background-image: url(${chooseCars});
  background-repeat: no-repeat;
  background-size: contain;
  width: clamp(200px, 100vw, 1920px);
  height: clamp(200px, 100vh, 1080px);
  z-index: -1;
  align-self: center;
  margin-bottom: -10%;

  @media screen and (max-width: 1600px) {
    margin-bottom: -20%;
  }

  @media screen and (max-width: 1300px) {
    margin-bottom: -25%;
  }

  @media screen and (max-width: 1000px) {
    margin-bottom: -40%;
  }
`;

export const StyledChooseText = styled.span<ChooseProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  max-width: ${(props) => props.maxWidth};
  line-height: ${(props) => props.lineHeight};
`;

export const StyledChooseSvg = styled.svg`
  width: 100px;
  height: 100px;
  background-color: #d3d3d3;
  color: #f2613f;
  border-radius: 50%;
  padding: 8px;
`;

type ChooseProps = {
  flexDirection?: string;
  justifyContent?: string;
  gap?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  maxWidth?: string;
  lineHeight?: string;
  alignItems?: string;
  $mediaQuery?: string;
  marginTop?: string;
};
