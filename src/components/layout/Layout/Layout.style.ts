import styled from "styled-components";
import { HeaderProps } from "../Header/Header";

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const StyledContainer = styled.div<HeaderProps>`
  display: flex;
  justify-content: center;
  align-items: ${(props) => props.$alignitems};
  justify-content: space-between;
  padding: ${(props) => props.$padding};
  height: ${(props) => props.height};
  width: 1350px;

  @media screen and (max-width: 1350px) {
    width: 100%;
  }
`;
