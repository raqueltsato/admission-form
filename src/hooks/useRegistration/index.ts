import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { showToast } from "~/components/Toast";
import { createRegistration, getRegistrations } from "~/core/api/registrations";
import { Registration } from "~/core/api/types";
import { NewUser } from "~/pages/NewUser/types";

export const useRegistration = () => {
  const [registrations, setRegistrations] = useState<
    Registration[] | undefined
  >();

  const {
    isLoading: isLoadingRegistrations,
    isError: isErrorFetchRegistrations,
    isRefetching,
    refetch,
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
      showToast({
        variant: "success",
        message: "Cadastro realizado com sucesso",
      }),
    onError: () =>
      showToast({
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
    refetch,
    isRefetching,
  };
};
