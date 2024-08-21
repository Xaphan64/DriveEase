import styled from "styled-components";

export const HomepageCardContainer = styled.div<HomepageCardProps>`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection};
  background-color: ${(props) => props.$backgroundColor};
  width: ${(props) => props.width};
  gap: ${(props) => props.$gap};
  align-items: ${(props) => props.$allignItems};
  padding: ${(props) => props.$padding};
  justify-content: ${(props) => props.$justifyContent};
  border-bottom: ${(props) => props.$borderBottom};
`;

export const HomepageCardText = styled.span<HomepageCardProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  text-align: center;
`;

export const HomepageCardTable = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #655e53;
  border-top: none;
`;

export const HomepageVerticalLine = styled.div`
  width: 2px;
  height: 24px;
  background-color: #655e53;
`;

type HomepageCardProps = {
  $flexDirection?: string;
  $backgroundColor?: string;
  width?: string;
  $gap?: string;
  fontSize?: string;
  fontWeight?: string;
  $allignItems?: string;
  $padding?: string;
  $justifyContent?: string;
  $borderBottom?: string;
};
