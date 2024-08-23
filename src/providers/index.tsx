import StylesProvider from "./StylesProvider";
import QueryProvider from "./QueryProvider";
import { Props } from "./types";
import Toast from "~/components/Toast";
import Router from "~/router";
import { RegistrationsProvider } from "~/context/useRegistrationContext";

const GlobalProvider = ({ children }: Props): JSX.Element => {
  return (
    <StylesProvider>
      <QueryProvider>
        <RegistrationsProvider>
          {children}
          <Router />
          <Toast />
        </RegistrationsProvider>
      </QueryProvider>
    </StylesProvider>
  );
};

export default GlobalProvider;
