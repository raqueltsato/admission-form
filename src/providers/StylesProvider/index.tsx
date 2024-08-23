import { ThemeProvider } from "styled-components";
import theme from "~/theme";
import { Props } from "../types";

const StylesProvider = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default StylesProvider;
