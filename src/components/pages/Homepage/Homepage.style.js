import styled from "styled-components";

export const HomepageContainer = styled.div`
  position: relative;
  background: linear-gradient(75deg, #ffb400 25%, transparent 25.5%);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const HomepageImage = styled.div`
  img {
    border-radius: 32px;
  }
`;

export const HomepageDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 40%;
`;

export const HomepageText = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
`;
