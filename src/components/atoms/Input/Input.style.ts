import styled from "styled-components";
import CustomInput from "./Input";
import CustomTextarea from "../TextArea/Textarea";

export const StyledInput = styled(CustomInput)<InputProps>`
  padding: 16px 24px;
  background-color: #232627;
  color: #ffffff;
  border: 1px solid #232627;
  max-width: ${(props) => props.maxWidth};

  &:focus {
    outline: none;
    border: 1px solid #f2613f;
  }

  &::placeholder {
    text-transform: capitalize;
  }
`;

export const StyledTextarea = styled(CustomTextarea)<InputProps>`
  padding: 16px 24px;
  background-color: #232627;
  color: #ffffff;
  border: 1px solid #232627;
  max-width: ${(props) => props.maxWidth};
  height: 240px;
  resize: vertical;

  &:focus {
    outline: none;
    border: 1px solid #f2613f;
  }

  &::placeholder {
    text-transform: capitalize;
  }
`;

type InputProps = {
  maxWidth?: string;
};
