import styled from "styled-components";
import faqBackground from "../../../../assets/faqBackground.png";

export const StyledQuestionsContainer = styled.div<FAQProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: ${(props) => props.$gap};
  border: ${(props) => props.$border};
  padding: ${(props) => props.$padding};
  max-width: ${(props) => props.$maxWidth};
  position: relative;
`;

export const StyledQuestionsImage = styled.div`
  background-image: url(${faqBackground});
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 1;
  width: 600px;
  height: 250px;
  position: absolute;
  left: -300px;
  bottom: 20%;
  z-index: -1;
`;

export const StyledQuestionsText = styled.span<FAQProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  padding: ${(props) => props.$padding};
  border-bottom: ${(props) => props.$borderBottom};
  background-color: ${(props) => props.$backgroundColor};
  max-width: 700px;
  line-height: 1.5;
  width: 100%;
`;

type FAQProps = {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  $padding?: string;
  $border?: string;
  $borderBottom?: string;
  $gap?: string;
  $backgroundColor?: string;
  $maxWidth?: string;
};
