import styled from "styled-components";
import carSide from "../../assets/carSide.png";

export const StyledContactCardContainer = styled.div<ContactCardProps>`
  position: static;
  padding-bottom: 100px;
  padding-bottom: ${(props) => props.paddingButtom};

  @media screen and (max-width: 1200px) {
    padding-bottom: 140px;
  }
`;

export const StyledContactCard = styled.div<ContactCardProps>`
  background-image: url(${carSide});
  background-repeat: no-repeat;
  background-position: 0 20%;
  background-color: ${(props) => props.backgroundColor};
  width: 100%;
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap};
  height: 150px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 4px;
    text-align: center;
    padding: 0 8px;
  }
`;

export const StyledCardText = styled.span<ContactCardProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(props) => props.color};

  svg {
    width: 32px;
    height: 32px;
  }

  @media screen and (max-width: 992px) {
    font-size: 24px;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  @media screen and (max-width: 450px) {
    font-size: 20px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

type ContactCardProps = {
  flexDirection?: string;
  gap?: string;
  paddingButtom?: string;
  fontSize?: string;
  backgroundColor?: string;
};
