import styled from "styled-components";

export const StyledInputsContainer = styled.div<InputsProps>`
  background-color: #232627;
  padding: ${(props) => props.$padding};
  margin: ${(props) => props.$margin};
  display: flex;
  flex-direction: ${(props) => props.$flexDirection};
  gap: ${(props) => props.$gap};
  align-items: ${(props) => props.alignItems};
`;

export const StyledInputText = styled.span<InputsProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  text-transform: ${(props) => props.$textTransform};
`;

export const StyledInputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;
`;

type InputsProps = {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  $textTransform?: string;
  $padding?: string;
  $gap?: string;
  $flexDirection?: string;
  $margin?: string;
  alignItems?: string;
};
