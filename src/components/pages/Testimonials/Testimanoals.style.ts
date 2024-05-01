import styled from "styled-components";

export const StyledTestimonial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
  text-align: center;
`;

export const StyledTestimonialContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  padding: 0 16px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
