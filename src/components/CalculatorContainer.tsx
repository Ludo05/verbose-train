import React from "react";
import { CalculatorContainerProps } from "../types";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: block;
  width: 243px;
  height: auto;
`;
const CalculatorContainer = ({ children }: CalculatorContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default CalculatorContainer;
