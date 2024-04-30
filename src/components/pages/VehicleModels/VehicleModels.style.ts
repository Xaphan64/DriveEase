import styled from "styled-components";

export const StyledModelsCarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media screen and (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
