import styled, { css } from "styled-components";

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;

  img {
    color: #f2613f;
    width: 60px;
    height: 60px;
  }
`;

export const StyledLogoText = styled.div`
  h2 {
    text-transform: uppercase;
    font-size: 20px;
  }

  span {
    text-transform: capitalize;
    letter-spacing: 3px;
    color: #f2613f;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  transition: width 0.2s;
`;

type Props = {
  showNavbar: boolean;
};

export const StyledMobileButtonContainer = styled.div<Props>(
  (props) => css`
    transition: width 0.2s;
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    gap: 5%;
    opacity: 0;
    visibility: hidden;

    ${props.showNavbar &&
    css`
      position: absolute;
      background-color: #2b2a2a;
      width: 100vw;
      height: 100vh;
      transition: width 0.2s;
      left: 0;
      top: 0;
      display: flex;
      flex-direction: column;
      gap: 5%;
      justify-content: center;
      visibility: visible;
      opacity: 1;
    `}
  `
);
