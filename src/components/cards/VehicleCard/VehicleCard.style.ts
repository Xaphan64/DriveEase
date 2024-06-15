import styled from "styled-components";

export const StyledVehicleCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 354px;
  height: 600px;
  justify-content: space-between;
  background-color: #232627;
  border: 2px solid gray;

  @media screen and (max-width: 355px) {
    width: 290px;
  }
`;

export const StyledVehicleImage = styled.div`
  img {
    width: 350px;
    height: 300px;

    object-fit: cover;

    @media screen and (max-width: 355px) {
      width: 286px;
    }
  }
`;

export const StyledVehicleTextContainer = styled.div<VehicleCardProps>`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection};
  justify-content: ${(props) => props.$justifyContent};
  padding: ${(props) => props.$padding};
  gap: ${(props) => props.$gap};
  height: ${(props) => props.height};
`;

export const StyledVehicleText = styled.div<VehicleCardProps>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;

export const ButtonContainer = styled.div`
  padding: 16px 0;
  border-top: 1px solid gray;
  margin: 0 16px;
  display: flex;
  justify-content: center;
`;

type VehicleCardProps = {
  $flexDirection?: "column" | "row";
  $justifyContent?: "flex-start" | "center" | "flex-end" | "space-around" | "space-between" | "space-evenly";
  $padding?: string;
  $gap?: string;
  height?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
};
