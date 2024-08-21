import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { showToast } from "~/components/Toast";
import {
  createRegistration,
  getRegistrations,
  updateRegistration,
} from "~/core/api/registrations";
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
    onError: () =>
      showToast({
        variant: "error",
        message: "Erro ao listar registros.",
      }),
  });

  const {
    mutate: createRegistrationHook,
    isLoading: isLoadingCreateRegistration,
  } = useMutation((data: NewUser) => createRegistration(data), {
    onSuccess: () => {
      refetch();
      showToast({
        variant: "success",
        message: "Cadastro realizado com sucesso.",
      });
    },
    onError: () =>
      showToast({
        variant: "error",
        message: "Erro ao realizar cadastro.",
      }),
  });

  const {
    mutate: updateRegistrationHook,
    isLoading: isLoadingUpdatingRegistration,
  } = useMutation((data: Registration) => updateRegistration(data.id, data), {
    onSuccess: () => {
      refetch();
      showToast({
        variant: "success",
        message: "Registro alterado com sucesso.",
      });
    },
    onError: () =>
      showToast({
        variant: "error",
        message: "Erro ao alterar cadastro",
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
    updateRegistrationHook,
    isLoadingUpdatingRegistration,
  };
};
