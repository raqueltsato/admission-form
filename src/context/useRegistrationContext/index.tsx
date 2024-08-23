import { createContext } from "react";
import { useRegistration } from "~/hooks/useRegistration";
import { RegistrationsReturnProps } from "~/hooks/useRegistration/types";
import { Props } from "./types";

export const RegistrationContext = createContext<RegistrationsReturnProps>(
  {} as RegistrationsReturnProps
);

export const RegistrationsProvider = ({ children }: Props) => {
  const { actions, values } = useRegistration();

  return (
    <RegistrationContext.Provider value={{ actions, values }}>
      {children}
    </RegistrationContext.Provider>
  );
};
