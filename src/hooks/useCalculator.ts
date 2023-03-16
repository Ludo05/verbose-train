import { useReducer } from "react";
import { IAppState } from "../types";
import { calculate, numberConvertor } from "../utils";
import CONSTANTS from "../constants/index";
import { calculatorReducer } from "../reducers";

const useCalculator = () => {
  const initialState: IAppState = {
    sign: "",
    num: "0",
    res: "0",
  };
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const executions = (value: string): void => {
    if (value === "%" && state.num !== 0) {
      const result = state.num / 100;
      dispatch({
        type: CONSTANTS.GET_PERCENTAGE,
        value: result,
      });
      return;
    }
    if (value === "+/-" && state.num !== 0) {
      const result = numberConvertor(state.num);
      dispatch({
        type: CONSTANTS.PLUS_MINUS,
        value: result.toString(),
      });
      return;
    }

    if (value === "c") {
      dispatch({
        type: CONSTANTS.CLEAR,
        value: "",
      });
      return;
    }

    if (["*", "/", "-", "+"].includes(value)) {
      dispatch({
        type: CONSTANTS.CONVERSIONS,
        value: value,
      });
      return;
    }

    if (
      (value === "=" && state.res !== 0) ||
      (value === "Enter" && state.res !== 0)
    ) {
      const result = calculate(state);
      dispatch({
        type: CONSTANTS.EQUALS,
        value: result,
      });
      return;
    }
    if (
      (value === "." && state.num && !String(state.num).includes(".")) ||
      value !== "."
    ) {
      dispatch({
        type: CONSTANTS.NUMBERS,
        value: value,
      });
      return;
    }
  };

  return {
    state,
    executions,
  };
};

export { useCalculator };
