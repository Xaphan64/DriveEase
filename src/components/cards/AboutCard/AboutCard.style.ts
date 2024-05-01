import styled from "styled-components";

export const StyledAboutCard = styled.div<AboutCardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    color: #f2613f;
    width: ${(props) => props.svgDimension};
    height: ${(props) => props.svgDimension};
    background-color: ${(props) => props.backgroundColor};
    border-radius: 4px 32px 32px 32px;
  }
`;

export const StyledAboutCardTextContainer = styled.div<AboutCardProps>`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection};
  align-items: center;
  gap: 8px;
  width: ${(props) => props.width};
`;

export const StyledAboutCardText = styled.span<AboutCardProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  white-space: ${(props) => props.whiteSpace};
  text-align: center;
`;
type AboutCardProps = {
  $flexDirection?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  whiteSpace?: string;
  width?: string;
  svgDimension?: string;
  backgroundColor?: string;
};
