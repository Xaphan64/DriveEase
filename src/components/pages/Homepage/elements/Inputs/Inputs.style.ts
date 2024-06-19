import styled from "styled-components";

export const StyledInputsContainer = styled.div<InputsProps>`
  background-color: ${(props) => props.$backgroundColor};
  padding: ${(props) => props.$padding};
  margin: ${(props) => props.$margin};
  display: flex;
  flex-direction: ${(props) => props.$flexDirection};
  gap: ${(props) => props.$gap};
  align-items: ${(props) => props.$alignItems};
  justify-content: ${(props) => props.$justifyContent};
  border-radius: ${(props) => props.$borderRadius};
  border-bottom: ${(props) => props.$borderBottom};

  @media screen and (max-width: ${(props) => props.$mediaQuery}) {
    padding: 12px 20px;
    margin: 16px;
  }
`;

export const StyledInputText = styled.span<InputsProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  text-transform: ${(props) => props.$textTransform};
  display: flex;
  align-items: ${(props) => props.$alignItems};
  gap: ${(props) => props.$gap};
  word-spacing: ${(props) => props.$wordSpacing};
`;

export const StyledInputGrid = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  align-items: flex-end;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 630px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const StyledSelect = styled.select`
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid gray;
  margin: 8px 0;
  background-color: #2b2a33;
  color: gray;
`;

export const StyledOption = styled.option`
  font-size: 16px;
`;

export const StyledErrorMessage = styled.div`
  background-color: #430c11;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  align-items: center;
`;

export const StyledCancelButton = styled.button<InputsProps>`
  border: none;
  background-color: transparent;
  color: ${(props) => props.color};
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const StyledDateInput = styled.input`
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid gray;
  margin: 8px 0;
  background-color: #2b2a33;
  color: gray;

  &:focus {
    outline: none;
    border: 1px solid #f2613f;
  }
`;

export const StyledTimeInput = styled(StyledDateInput)`
  padding: 0 4px;
  margin: 0px;
  text-align: center;
  color: #ffffff;
  letter-spacing: 2px;
`;

export const StyledModalInput = styled(StyledDateInput)`
  border-radius: 0px;
  margin: 0;
  color: #ffffff;
`;

export const StyledSearchButton = styled.button`
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid gray;
  border: none;
  margin: 8px 0;
  background-color: #f2613f;
  color: white;
  height: 36px;
  cursor: pointer;

  &:hover {
    background-color: #fa4226;
    color: #ffffff;
    border: 1px solid #fa4226;
  }
`;

export const StyledModalBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const StyledModal = styled.form`
  z-index: 1;
  background-color: rgba(0, 0, 0, 1);
  display: flex;
  flex-direction: column;
  border: 2px solid gray;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 700px;
  height: 95%;
  overflow-y: scroll;
`;

export const StyledModalImage = styled.img`
  max-width: 350px;
  max-height: 300px;
  height: auto;
  width: 100%;
`;

export const StyledModalGrid = styled.div<InputsProps>`
  display: grid;
  grid-template-columns: ${(props) => props.$gridColumns};
  gap: 24px;
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
  $alignItems?: string;
  $justifyContent?: string;
  $borderRadius?: string;
  $mediaQuery?: string;
  $backgroundColor?: string;
  $borderBottom?: string;
  $wordSpacing?: string;
  $gridColumns?: string;
};
