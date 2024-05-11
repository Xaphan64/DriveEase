import styled from "styled-components";

export const StyledTestimonialCardContainer = styled.div`
  max-width: 500px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  border: 1px solid gray;
`;

export const StyledTestimonialContainer = styled.div<TestimotialsProps>`
  display: flex;
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignitems};
  flex-direction: ${(props) => props.$flexDirection};
  gap: ${(props) => props.$gap};

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
  }

  svg {
    width: 50px;
    height: 50px;
    color: #fa4226;
  }
`;

export const StyledTestimonialText = styled.span<TestimotialsProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;

type TestimotialsProps = {
  fontSize?: string;
  fontWeight?: string;
  $justifyContent?: string;
  $alignitems?: string;
  $flexDirection?: string;
  $gap?: string;
};
