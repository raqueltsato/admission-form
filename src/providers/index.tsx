import StylesProvider from "./StylesProvider";
import QueryProvider from "./QueryProvider";
import { Props } from "./types";
import Toast from "~/components/Toast";
import Router from "~/router";

const GlobalProvider = ({ children }: Props): JSX.Element => {
  return (
    <StylesProvider>
      <QueryProvider>
        {children}
        <Router />
      </QueryProvider>
      <Toast />
    </StylesProvider>
  );
};

export default GlobalProvider;
