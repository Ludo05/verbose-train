import React from "react";
import { BoxProps } from "../types";
import styled from "styled-components";

const StyledBox = styled.div`
  width: auto;
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, 60px);
  grid-template-rows: repeat(5, 60px);
  grid-gap: 1px;
`;

const Box = ({ children }: BoxProps) => {
  return <StyledBox>{children}</StyledBox>;
};

export default Box;
