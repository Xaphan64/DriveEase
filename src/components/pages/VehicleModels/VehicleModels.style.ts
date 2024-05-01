import styled from "styled-components";

export const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 730px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
