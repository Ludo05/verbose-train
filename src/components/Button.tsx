import React from "react";
import styled from "styled-components";
import { ButtonProps } from "../types";

type Value = Pick<ButtonProps, "value">;

let checkValueOfButton = (array: any, value: any): boolean => {
  return array.some((element: any) => element === value);
};
const StyledButton = styled.button<Value>`
  font-weight: bold;
  font-size: 20px;
  outline: none;
  border: none;
  color: white;
  background-color: ${({ value }: Value) => {
    switch (true) {
      case checkValueOfButton(["c", "+/-", "%"], value):
        return "rgba(57, 59, 61, 0.75)";
      case checkValueOfButton(["*", "/", "-", "+", "="], value):
        return "rgba(240, 155, 10, 1)";
      default:
        return "rgba(57, 59, 61, 0.35)";
    }
  }};
  grid-column: ${({ value }: Value) => {
    if (value === "0") {
      return "1 / 3";
    }
  }};
  cursor: pointer;
  border-radius: 1px;

  &:active {
    background-color: rgba(194, 194, 194, 0.8);
  }
`;

export const Button = ({ value, ...rest }: ButtonProps) => {
  return (
    <StyledButton {...rest} value={value}>
      {value}
    </StyledButton>
  );
};
