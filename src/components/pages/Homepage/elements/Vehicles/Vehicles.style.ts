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
`;

export const StyledVehiclesImage = styled.img`
  width: 600px;
  height: auto;
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
};
