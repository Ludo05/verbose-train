import React from "react";

type IChildren = JSX.Element | JSX.Element[];

type Value = string | number;

type DisplayProps = React.HTMLAttributes<HTMLDivElement> & {
  value: Value;
};

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  value: string;
};

type CalculatorContainerProps = {
  children: IChildren;
};

type BoxProps = {
  children: IChildren;
};

type IAppState = { sign: string; num: string; res: string };

export type {
  ButtonProps,
  BoxProps,
  CalculatorContainerProps,
  DisplayProps,
  IAppState,
};
