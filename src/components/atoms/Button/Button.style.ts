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

export const StyledButton = styled(Button)<ButtonProps>`
  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.color};
  padding: 16px 24px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: ${(props) => props.width};
  max-width: ${(props) => props.$maxWidth};
  border: ${(props) => props.$border};

  &:hover {
    background-color: ${(props) => props.$hoverBackgroundColor};
    color: ${(props) => props.hoverColor};
    border: ${(props) => props.hoverBorder};
  }

  svg {
    color: ${(props) => props.svgColor};
  }
`;

export const StyledModalButton = styled(StyledButton)`
  border-radius: 0px;
`;

export const OrangeMobileButton = styled(StyledButton)`
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

export const VehicleButton = styled(StyledButton)<VehicleButtonProps>`
  border-radius: 0px;
  justify-content: flex-start;
  padding-left: 8px;
  font-size: 20px;
  background-color: ${(props) => (props.isActive ? "#f2613f" : "#232627")};

  &:hover {
    background-color: #f2613f;
    color: #ffffff;
  }
`;

type ButtonProps = {
  width?: string;
  $backgroundColor?: string;
  $hoverBackgroundColor?: string;
  hoverColor?: string;
  $border?: string;
  hoverBorder?: string;
  color?: string;
  svgColor?: string;
  $maxWidth?: string;
};

type VehicleButtonProps = {
  isActive?: boolean;
};
