import styled from "styled-components";
import { HeaderProps } from "../Header/Header";

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const StyledOutlet = styled.div`
  display: flex;
  width: 70%;
  height: 60vh;

  border: 1px solid red;
`;

export const StyledContainer = styled.div<HeaderProps>`
  display: flex;
  justify-content: center;
  align-items: ${(props) => props.$alignItems};
  justify-content: space-between;
  padding: ${(props) => props.$padding};
  width: 70%;
`;
