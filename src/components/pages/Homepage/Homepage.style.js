import styled from "styled-components";

export const HomepageContainer = styled.div`
  position: relative;
  background: linear-gradient(75deg, #ffb400 25%, transparent 25.3%);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const HomepageImage = styled.div`
  img {
    border-radius: 32px;
    box-shadow: 0px 3px 32px black;
    /* width: 100%;
    min-width: 330px;
    height: calc(100vh - 80px);
    margin: 0 40px; */
  }

  @media screen and (max-width: 992px) {
  }

  @media screen and (max-width: 576px) {
    img {
      display: none;
    }
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

  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`;
