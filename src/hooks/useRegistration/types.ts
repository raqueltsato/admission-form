import { AxiosResponse } from "axios";
import { QueryObserverResult, UseMutateFunction } from "react-query";
import { Registration } from "~/core/api/types";
import { NewUser } from "~/pages/NewUser/types";

export type RegistrationsReturnProps = {
  actions: {
    createRegistrationHook: UseMutateFunction<
      AxiosResponse<Registration, any>,
      unknown,
      NewUser,
      unknown
    >;
    refetch: (
      options?: any
    ) => Promise<QueryObserverResult<AxiosResponse<any, any>, unknown>>;
    updateRegistrationHook: UseMutateFunction<
      AxiosResponse<Registration, any>,
      unknown,
      Registration,
      unknown
    >;
    deleteRegistrationHook: (id: string) => void;
    setCpf: React.Dispatch<React.SetStateAction<string>>;
  };
  values: {
    registrations: Registration[];
    isLoadingRegistrations: boolean;
    isErrorFetchRegistrations: boolean;
    isLoadingCreateRegistration: boolean;
    isRefetching: boolean;
    isLoadingUpdatingRegistration: boolean;
    isLoadingDeleteRegistration: boolean;
    isLoadingFilteredRegistration: boolean;
    isErrorFetchFilteredRegistration: boolean;
  };
};
