import { IAppState } from "../types";

const numberConvertor = (num: number): number => {
  if (num < 0) {
    return Math.abs(num);
  }
  return -Math.abs(num);
};

const calculate = (i: IAppState) => {
  let result = parseFloat(i.res);
  let current = parseFloat(i.num);

  switch (i.sign) {
    case "-":
      return result - current;
    case "*":
      return result * current;
    case "+":
      return result + current;
    case "/":
      return result / current;
    default:
      return;
  }
};

export { numberConvertor, calculate };
