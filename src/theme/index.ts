import { DefaultTheme } from "styled-components";

export const Colors = {
  white: "#fff",
  black: "#252525",
  lightestBlack: "#323232",
  green: "#64a98c",
  toastGreen: "#7dedcf",
  lightestGreen: "#1d8e6a",
  gray: "#ccc",
  hover: "#f0f0f0",
  red: "#e80537",
  lightestRed: "#e86269",
  orange: "#ff7500",
  lightestOrange: "#ffbd83",
  overlay: "#1a203066",
  reviewColorBg: "#FDF8E9",
  approvedColorBg: "#EEEEFD",
  reprovedColorBg: "#FBEDF6",
  reviewColorTitle: "#EFC24D",
  approvedColorTitle: "#4242DF",
  reprovedColorTitle: "#CE2893",
} as const;

export const FontSize = {
  sm: "12px",
  md: "16px",
  lg: "24px",
} as const;

export const Space = {
  xxs: "4px",
  xs: "8px",
  sm2: "12px",
  sm: "16px",
  md: "20px",
  lg: "24px",
  xl: "32px",
  xxl: "48px",
} as const;

export const Radius = {
  xs: "2px",
  sm: "4px",
  md: "8px",
  lg: "24px",
  xl: "32px",
  xxl: "36px",
  xxxl: "50%",
} as const;

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof Colors;
    font: typeof FontSize;
    space: typeof Space;
    radius: typeof Radius;
  }
}

const theme: DefaultTheme = {
  colors: Colors,
  font: FontSize,
  space: Space,
  radius: Radius,
};

export default theme;
