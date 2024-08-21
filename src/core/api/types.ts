export enum Status {
  approved = "APPROVED",
  review = "REVIEW",
  reproved = "REPROVED",
}

export type Registration = {
  admissionDate: string;
  email: string;
  employeeName: string;
  status: Status;
  cpf: string;
  id: string;
};
