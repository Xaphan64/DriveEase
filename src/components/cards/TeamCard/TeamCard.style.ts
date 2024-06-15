import styled from "styled-components";

export const StyledTeamCard = styled.div`
  border: 2px solid gray;
  background-color: #232627;

  img {
    width: 350px;
    height: 400px;
    object-fit: cover;
    object-position: top;

    @media screen and (max-width: 355px) {
      width: 290px;
    }
  }
`;

export const StyledTeamTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 16px;
  gap: 16px;
`;
