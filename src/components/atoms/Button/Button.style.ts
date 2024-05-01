import styled from "styled-components";
import CustomButton from "./Button";
import { Style } from "@mui/icons-material";

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

type ButtonProps = {
  width?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  hoverColor?: string;
  border?: string;
  hoverBorder?: string;
  color?: string;
  svgColor?: string;
};

export const StyledButton = styled(Button)<ButtonProps>`
  /* background-color: #f2613f; */
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  padding: 16px 24px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: ${(props) => props.width};
  border: ${(props) => props.border};

  &:hover {
    /* background-color: #fa4226;
    color: #ffffff; */

    background-color: ${(props) => props.hoverBackgroundColor};
    color: ${(props) => props.hoverColor};
    border: ${(props) => props.hoverBorder};
  }

  svg {
    color: ${(props) => props.svgColor};
  }
`;

// export const BlackButton = styled(OrangeButton)`
//   background-color: #ffffff;
//   color: #0c0c0c;
//   border: 1px solid #ffffff;

//   &:hover {
//     background-color: #0c0c0c;
//     border: 1px solid #ffffff;
//   }
// `;

// export const OrangeMobileButton = styled(OrangeButton)`
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
