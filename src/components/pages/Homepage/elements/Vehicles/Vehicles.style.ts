import styled from "styled-components";

export const StyledVehiclesContainer = styled.div<VehiclesProps>`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection};
  align-items: ${(props) => props.$alignItems};
  justify-content: ${(props) => props.$justifyContent};
  gap: ${(props) => props.$gap};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  overflow-y: ${(props) => props.$overflowY};
  margin: ${(props) => props.$margin};

  @media screen and (max-width: ${(props) => props.$mediaQuery}) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: ${(props) => props.$mediaQuery2}) {
    width: 100%;
    padding: 0 16px;
    direction: rtl;
  }
`;

export const StyledVehiclesText = styled.div<VehiclesProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  max-width: ${(props) => props.$maxWidth};
  line-height: ${(props) => props.$lineHeight};
  text-align: center;
`;

export const StyledVehiclesImageContainer = styled.div<VehiclesProps>`
  height: ${(props) => props.height};
  max-height: ${(props) => props.maxHeight};

  @media screen and (max-width: 500px) {
    height: 350px;
  }

  @media screen and (max-width: 450px) {
    height: 300px;
  }

  @media screen and (max-width: 400px) {
    height: 260px;
  }

  @media screen and (max-width: 360px) {
    height: 230px;
  }

  @media screen and (max-width: 300px) {
    height: 200px;
  }
`;

export const StyledVehiclesImage = styled.img`
  width: 600px;
  height: auto;

  @media screen and (max-width: 620px) {
    width: 100%;
    max-width: 100%;
  }
`;

type VehiclesProps = {
  $flexDirection?: string;
  $alignItems?: string;
  $justifyContent?: string;
  $gap?: string;
  fontSize?: string;
  fontWeight?: string;
  $maxWidth?: string;
  $lineHeight?: string;
  width?: string;
  height?: string;
  $overflowY?: string;
  $margin?: string;
  maxHeight?: string;
  $mediaQuery?: string;
  $mediaQuery2?: string;
};
