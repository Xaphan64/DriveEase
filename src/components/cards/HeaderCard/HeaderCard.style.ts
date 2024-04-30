import styled from "styled-components";
import carBack from "../../assets/carBack.jpg";

export const HeaderCardContainer = styled.div`
  display: flex;
  align-self: flex-start;
`;

export const StyledHeaderCardContainer = styled.div`
  position: static;
  padding-bottom: 240px;
  display: flex;
  flex-direction: column;
`;

export const StyledHeaderImage = styled.div`
  background-image: url(${carBack});
  background-repeat: no-repeat;
  background-position: 0 50%;
  background-size: cover;
  opacity: 0.2;
  width: 100%;
  height: 410px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
`;

export const StyledHeaderText = styled.span<HeaderText>`
  padding-left: 32px;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;

type HeaderText = {
  fontSize?: string;
  fontWeight?: string;
};
