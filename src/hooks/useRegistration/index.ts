import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { showToast } from "~/components/Toast";
import {
  createRegistration,
  deleteRegistration,
  getFilteredRegistration,
  getRegistrations,
  updateRegistration,
} from "~/core/api/registrations";
import { Registration } from "~/core/api/types";
import { NewUser } from "~/pages/NewUser/types";

export const useRegistration = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [cpf, setCpf] = useState<string>("");

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

  const {
    mutate: deleteRegistrationHook,
    isLoading: isLoadingDeleteRegistration,
  } = useMutation((id: string) => deleteRegistration(id), {
    onSuccess: () => {
      refetch();
      showToast({
        variant: "success",
        message: "Registro excluído com sucesso.",
      });
    },
    onError: () => {
      showToast({
        variant: "error",
        message: "Erro ao excluir cadastro",
      });
    },
  });

  const {
    isLoading: isLoadingFilteredRegistration,
    isError: isErrorFetchFilteredRegistration,
  } = useQuery({
    queryKey: ["filteredRegistrations", cpf],
    queryFn: () => getFilteredRegistration(cpf),
    enabled: !!cpf,
    onSuccess: (data) => {
      setRegistrations(data.data);
    },
    onError: () =>
      showToast({
        variant: "error",
        message: "Erro ao buscar registros.",
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
    deleteRegistrationHook,
    isLoadingDeleteRegistration,
    isLoadingFilteredRegistration,
    isErrorFetchFilteredRegistration,
    setCpf,
  };
};
