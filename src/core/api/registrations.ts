import { api } from "~/core/config";
import { Registration } from "./types";

export const getRegistrations = async () => await api.get(`/registrations`);

export const createRegistration = async (data: Omit<Registration, "id">) =>
  await api.post<Registration>(`/registrations`, data);
