import StylesProvider from "./StylesProvider";
import QueryProvider from "./QueryProvider";
import { Props } from "./types";
import { RegistrationsProvider } from "~/context/useRegistrationContext";

const GlobalProvider = ({ children }: Props): JSX.Element => {
  return (
    <StylesProvider>
      <QueryProvider>
        <RegistrationsProvider>{children}</RegistrationsProvider>
      </QueryProvider>
    </StylesProvider>
  );
};

export default GlobalProvider;
