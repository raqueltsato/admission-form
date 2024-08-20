import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { createRegistration, getRegistrations } from "~/core/api/registrations";
import { Registration } from "~/core/api/types";
import { NewUser } from "~/pages/NewUser/types";
import { UseToastReturn } from "~/hooks/useToast/types";

export const useRegistration = ({
  handleShowToast,
}: Pick<UseToastReturn, "handleShowToast">) => {
  const [registrations, setRegistrations] = useState<
    Registration[] | undefined
  >();

  const {
    isLoading: isLoadingRegistrations,
    isError: isErrorFetchRegistrations,
  } = useQuery({
    queryKey: ["registrations"],
    queryFn: () => getRegistrations(),
    onSuccess: (data) => {
      setRegistrations(data.data);
    },
  });

  const {
    mutate: createRegistrationHook,
    isLoading: isLoadingCreateRegistration,
  } = useMutation((data: NewUser) => createRegistration(data), {
    onSuccess: () =>
      handleShowToast({
        variant: "success",
        message: "Cadastro realizado com sucesso",
      }),
    onError: () =>
      handleShowToast({
        variant: "error",
        message: "Erro ao realizar cadastro",
      }),
  });

  return {
    registrations,
    isLoadingRegistrations,
    isErrorFetchRegistrations,
    createRegistrationHook,
    isLoadingCreateRegistration,
  };
};
