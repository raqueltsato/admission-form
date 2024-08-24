import { Registration, Status } from "~/core/api/types";

export type Props = {
  registration: Registration;
};

export type ChangeStatusProps = {
  modalTitle: string;
  description: string;
  newStatus: Status | null;
  action: () => void;
};
