import styled from "styled-components";

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;

  img {
    color: #f2613f;
    width: 60px;
    height: 60px;
  }
`;

export const StyledLogoText = styled.div`
  h2 {
    text-transform: uppercase;
    font-size: 20px;
  }

  span {
    text-transform: capitalize;
    letter-spacing: 3px;
    color: #f2613f;
  }
`;
export const StyledButtonContainer = styled.div`
  display: flex;
  gap: 16px;
`;
