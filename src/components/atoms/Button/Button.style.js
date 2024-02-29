import styled from "styled-components";
import Button from "./Button";

export const StyledButton = styled(Button)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  color: white;
  background-color: ${(props) => props.backgroundColor};
  transition: 0.1s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-size: 18px;

  span {
    display: none;
    position: absolute;
  }

  &:hover {
    width: 150px;
    background-color: orange;

    span {
      display: block;
    }
  }

  svg {
    font-size: 32px;
  }
`;
