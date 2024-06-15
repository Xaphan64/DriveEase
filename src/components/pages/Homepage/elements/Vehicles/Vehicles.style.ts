import styled from "styled-components";

export const StyledVehiclesContainer = styled.div<VehiclesProps>`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection};
  align-items: ${(props) => props.$alignItems};
  justify-content: ${(props) => props.$justifyContent};
  gap: ${(props) => props.$gap};
  width: ${(props) => props.width};
`;

export const StyledVehiclesText = styled.div<VehiclesProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  max-width: ${(props) => props.$maxWidth};
  line-height: ${(props) => props.$lineHeight};
  text-align: center;
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
};
