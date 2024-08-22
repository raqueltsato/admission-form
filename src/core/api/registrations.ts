import { api } from "~/core/config";
import { Registration } from "./types";

export const getRegistrations = async () => await api.get(`/registrations`);

export const createRegistration = async (data: Omit<Registration, "id">) =>
  await api.post<Registration>(`/registrations`, data);

export const updateRegistration = async (id: string, data: Registration) =>
  await api.put<Registration>(`/registrations/${id}`, data);

export const deleteRegistration = async (id: string) =>
  await api.delete<Registration>(`/registrations/${id}`);

export const getFilteredRegistration = async (cpf: string) =>
  await api.get(`/registrations?cpf=${cpf}`);
