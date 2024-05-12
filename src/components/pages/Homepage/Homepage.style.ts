import styled from "styled-components";

export const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px 0;
  width: 100%;
`;

type PageCategoryProps = {
  $flexDirection?: "column" | "row";
  width?: string;
  $gap?: string;
};

export const StyledPageCategory = styled.div<PageCategoryProps>`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection};
  width: ${(props) => props.width};
  gap: ${(props) => props.$gap};
`;

type TextProps = {
  fontSize: string;
  color?: string;
  fontWeight?: string;
};

export const StyledText = styled.span<TextProps>`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  display: flex;
  gap: 16px;

  p {
    color: #f2613f;
  }
`;

export const StyledTitle = styled.h1`
  display: flex;
  flex-direction: column;

  span {
    display: flex;
    flex-direction: row;
    gap: 8px;

    p {
      color: #f2613f;
    }
  }
`;
