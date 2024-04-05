import styled from "styled-components";
import { FooterProps } from "./Footer";

export const StyledFooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  justify-content: space-between;
  padding: 80px 24px;
  width: 1350px;

  border: 1px solid red;

  @media screen and (max-width: 1350px) {
    width: 100%;
  }

  @media screen and (max-width: 1200px) {
    display: grid;
    grid-template-columns: 2fr 2fr;
    gap: 40px;
    padding: 40px 16px;
    justify-items: center;
  }

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 24px 8px;
  }
`;

export const StyledFooterItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (max-width: 700px) {
    align-items: center;
  }
`;

export const StyledFooterTitle = styled.h2<FooterProps>`
  text-transform: ${(props) => props.$textTransform};
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};

  span {
    font-size: 24px;
    font-weight: normal;
  }
`;

export const StyledFooterText = styled.span<FooterProps>`
  width: ${(props) => props.width};
  line-height: 1.7;
  color: ${(props) => props.color};
  letter-spacing: 1px;

  @media screen and (max-width: 1200px) {
    width: 300px;
    /* padding: 0 16px; */
  }
`;

export const StyledFooterContact = styled.div`
  font-weight: bold;
  letter-spacing: 1px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const StyledFooterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
