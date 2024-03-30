import styled from "styled-components";
import CustomButton from "./Button";

export const NavButton = styled(CustomButton)`
  background: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  transition: 0.3s;
  text-transform: capitalize;

  &:hover {
    color: #f2613f;
  }
`;

export const OrangeButton = styled(CustomButton)`
  background-color: #f2613f;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  transition: 0.3s;
  text-transform: capitalize;
  padding: 16px 24px;
  border-radius: 4px;

  &:hover {
    background-color: #fa4226;
  }
`;
