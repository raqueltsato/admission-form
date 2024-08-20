import StylesProvider from "./StylesProvider";
import QueryProvider from "./QueryProvider";
import { Props } from "./types";

const GlobalProvider = ({ children }: Props): JSX.Element => (
  <StylesProvider>
    <QueryProvider>{children}</QueryProvider>
  </StylesProvider>
);

export default GlobalProvider;
