import { ThemeProvider } from "styled-components";
import theme from "~/theme";
import { Props } from "../types";

const StylesProvider: React.FC<Props> = ({ children }): JSX.Element => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default StylesProvider;
