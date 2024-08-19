import { useState } from "react";
import { useQuery } from "react-query";
import { getRegistrations } from "~/core/api/registrations";
import { Registration } from "./types";

export const useRegistration = () => {
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

  return { registrations, isLoadingRegistrations, isErrorFetchRegistrations };
};
