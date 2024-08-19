import { useEffect, useState } from "react";
import { getRegistrations } from "~/services/registrations";
import { Registration } from "./types";

export const useRegistration = () => {
  const [registrations, setRegistrations] = useState<
    Registration[] | undefined
  >();
  const fetchRegistrations = async () => {
    const data = await getRegistrations();
    setRegistrations(data.data);
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  return { registrations };
};
