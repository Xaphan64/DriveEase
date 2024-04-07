import styled from "styled-components";
import CustomButton from "./Button";

export const Button = styled(CustomButton)`
  background: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  transition: 0.3s;
  text-transform: capitalize;
  white-space: nowrap;

  &:hover {
    color: #f2613f;
  }
`;

export const OrangeButton = styled(Button)`
  background-color: #f2613f;
  padding: 16px 24px;
  border-radius: 4px;

  &:hover {
    background-color: #fa4226;
    color: #ffffff;
  }
`;

export const OrangeMobileButton = styled(OrangeButton)`
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const NavButton = styled(Button)`
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const MobileButton = styled(Button)`
  display: flex;
  z-index: 10;

  svg {
    width: 32px;
    height: 32px;
  }

  @media screen and (min-width: 993px) {
    display: none;
  }
`;
