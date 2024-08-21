import StylesProvider from "./StylesProvider";
import QueryProvider from "./QueryProvider";
import { Props } from "./types";
import Toast from "~/components/Toast";

const GlobalProvider = ({ children }: Props): JSX.Element => {
  return (
    <StylesProvider>
      <QueryProvider>{children}</QueryProvider>
      <Toast />
    </StylesProvider>
  );
};

export default GlobalProvider;
