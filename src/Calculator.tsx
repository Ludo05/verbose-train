import React from "react";

import CalculatorContainer from "./components/CalculatorContainer";
import Display from "./components/Display";
import Box from "./components/Box";
import "./styles/button.css";

import CONSTANTS from "./constants/index";
import { useCalculator } from "./hooks/useCalculator";
import { Button } from "./components/Button";

const Calculator = () => {
  const { state, executions } = useCalculator();

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = event.target as HTMLButtonElement;
    executions(value);
  };

  const keyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const value = event.key;
    if (CONSTANTS.BUTTON_VALUES.flat().includes(value) || value === "Enter") {
      executions(value);
    }
  };

  return (
    <CalculatorContainer>
      <Display onKeyDown={keyDown} value={state.num ? state.num : state.res} />
      <Box>
        {CONSTANTS.BUTTON_VALUES.flat().map((btn: string, i: number) => {
          return <Button key={i} value={btn} onClick={onClick} />;
        })}
      </Box>
    </CalculatorContainer>
  );
};

export default Calculator;
