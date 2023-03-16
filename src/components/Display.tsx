import React from "react";
import { DisplayProps } from "../types";
import { Textfit } from "react-textfit";
import styled from "styled-components";

const StyledDisplay = styled(Textfit)`
  height: 100px;
  padding: 0 10px;
  background-color: rgba(57, 59, 61, 1);
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  color: white;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const Display = ({ value, ...rest }: DisplayProps) => {
  return (
    <StyledDisplay {...rest} mode={"single"} tabIndex={0}>
      {value}
    </StyledDisplay>
  );
};

export default Display;
