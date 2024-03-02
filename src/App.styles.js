import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  display: flex;
  font-weight: bold;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
  font-family: system-ui;
`;

export const TitleBack = styled.h1`
  opacity: 0.5;
  color: #212121;
  position: absolute;
  font-size: 100px;
  letter-spacing: 8px;
`;

export const TitleFront = styled.h2`
  color: ${(props) => props.color};
  position: relative;
  font-size: 60px;
  user-select: none;
`;
