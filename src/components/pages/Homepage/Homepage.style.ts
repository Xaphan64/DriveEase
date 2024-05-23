import styled from "styled-components";

export const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px 0;
  width: 100%;
`;

export const StyledPageCategory = styled.div<PageCategoryProps>`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection};
  width: ${(props) => props.width};
  gap: ${(props) => props.$gap};
`;

export const StyledText = styled.span<TextProps>`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  display: flex;
  gap: 16px;
`;

export const StyledBackgroundImage = styled.img`
  position: absolute;
  max-width: 60%;
  height: auto;
  top: 0;
  right: 0;
  z-index: -1;
  opacity: 0.5;

  @media screen and (max-width: 1400px) {
    top: 10%;
  }

  @media screen and (max-width: 1200px) {
    top: 20%;
  }

  @media screen and (max-width: 1050px) {
    top: 30%;
  }

  @media screen and (max-width: 992px) {
    top: 10%;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

type PageCategoryProps = {
  $flexDirection?: "column" | "row";
  width?: string;
  $gap?: string;
};

type TextProps = {
  fontSize: string;
  color?: string;
  fontWeight?: string;
};
