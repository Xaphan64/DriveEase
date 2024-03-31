import styled from "styled-components";
import CustomInput from "./Input";

export const StyledInput = styled(CustomInput)`
  padding: 16px 24px;
  background-color: #232627;
  color: #ffffff;
  border: 1px solid #232627;

  &:focus {
    outline: none;
    border: 1px solid #f2613f;
  }

  &::placeholder {
    text-transform: capitalize;
  }
`;
