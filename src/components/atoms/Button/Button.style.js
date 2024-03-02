import styled from "styled-components";
import Button from "./Button";

export const StyledButton = styled(Button)`
  width: ${(props) => props.width};
  height: 50px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  color: #ffffff;
  background-color: ${(props) => props.backgroundColor};
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 0 16px;
  gap: 16px;
  font-size: 18px;

  &:hover {
    background-color: #ffb400;
  }

  svg {
    font-size: 32px;
  }
`;

export const ButtonText = styled.span`
  width: 100%;
  white-space: nowrap;
`;
