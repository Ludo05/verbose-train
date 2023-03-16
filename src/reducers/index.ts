import CONSTANTS from "../constants";

export const calculatorReducer = (
  state: any,
  action: { type: any; value: any }
) => {
  switch (action.type) {
    case CONSTANTS.CONVERSIONS:
      return {
        ...state,
        sign: action.value,
        res: state.num,
        num: "0",
      };
    case CONSTANTS.EQUALS:
      return {
        ...state,
        res: action.value,
        num: action.value,
      };
    case CONSTANTS.NUMBERS:
      return {
        ...state,
        num: state.num === "0" ? action.value : state.num + action.value,
      };
    case CONSTANTS.PLUS_MINUS:
      return {
        ...state,
        num: action.value,
      };
    case CONSTANTS.CLEAR:
      return {
        ...state,
        num: "0",
        res: "0",
        sign: "",
      };
    case CONSTANTS.GET_PERCENTAGE:
      return {
        ...state,
        num: action.value,
        res: action.value,
      };
    default:
      return state;
  }
};
