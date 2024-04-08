import styled from "styled-components";
import city from "../../assets/city.png";
// import test from "../../assets/test.webp";

export const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px 0;
  width: 100%;
`;

export const BackgroundImage = styled.img`
  background-image: url(${city});
  width: 800px;
  height: 600px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  /* border-radius: 24px; */
  /* background-color: gray; */
  outline: none;
  border: none;
  z-index: -1;
`;

type PageCategoryProps = {
  $flexDirection?: "column" | "row";
  $width?: string;
  $gap?: string;
};

export const StyledPageCategory = styled.div<PageCategoryProps>`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection};
  width: ${(props) => props.$width};
  gap: ${(props) => props.$gap};

  /* border: 1px solid red; */
`;

type TextProps = {
  $fontSize: string;
  $color?: string;
  $fontWeight?: string;
};

export const StyledText = styled.span<TextProps>`
  font-size: ${(props) => props.$fontSize};
  color: ${(props) => props.$color};
  font-weight: ${(props) => props.$fontWeight};
  display: flex;
  gap: 16px;

  p {
    color: #f2613f;
  }
`;
