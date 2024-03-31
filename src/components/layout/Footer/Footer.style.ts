import styled from "styled-components";
import { FooterProps } from "./Footer";

export const StyledFooterItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  width: 300px;
  line-height: 1.7;
  color: ${(props) => props.color};
  letter-spacing: 1px;
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
