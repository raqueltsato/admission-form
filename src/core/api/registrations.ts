import { api } from "~/core/config";

export const getRegistrations = async () => await api.get(`/registrations`);
