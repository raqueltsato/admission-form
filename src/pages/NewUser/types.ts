import { Registration } from "~/core/api/types";

export type NewUser = Omit<Registration, "id">;
