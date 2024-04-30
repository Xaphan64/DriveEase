// ASSETS

// STYLES
import { StyledAboutCard, StyledAboutCardText, StyledAboutCardTextContainer } from "./AboutCard.style";

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
type AboutCardProps = {
  number: string;
  text: string;
  children: React.ReactNode;
  fontSize?: string;
  fontWeight?: "bold" | "normal" | "lighter";
  color?: string;
  flexDirection?: "row" | "column";
  whiteSpace?: string;
  width?: string;
  svgDimension?: string;
  backgroundColor?: string;
};

const AboutCard = (props: AboutCardProps) => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <StyledAboutCard svgDimension={props.svgDimension} backgroundColor={props.backgroundColor}>
      {props.children}

      <StyledAboutCardTextContainer flexDirection={props.flexDirection} width={props.width}>
        <StyledAboutCardText fontSize={props.fontSize} fontWeight={props.fontWeight} whiteSpace={props.whiteSpace}>
          {props.number}
        </StyledAboutCardText>
        <StyledAboutCardText color={props.color}>{props.text}</StyledAboutCardText>
      </StyledAboutCardTextContainer>
    </StyledAboutCard>
  );
};

export default AboutCard;
