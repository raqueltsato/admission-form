import { api } from "~/api";

export const getRegistrations = async () => await api.get(`/registrations`);
