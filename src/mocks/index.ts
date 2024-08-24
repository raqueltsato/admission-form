import { Registration } from "~/core/api/types";

export const registrationsMock = [
  {
    admissionDate: "10/05/2023",
    email: "juliana@caju.com.br",
    employeeName: "Juliana Mendes",
    status: "REPROVED",
    cpf: "52999721056",
    id: "8",
  },
  {
    admissionDate: "28/02/2023",
    email: "carlos@caju.com.br",
    employeeName: "Carlos Ferreira",
    status: "REVIEW",
    cpf: "52869954034",
    id: "9",
  },
  {
    admissionDate: "05/07/2023",
    email: "joao@caju.com.br",
    employeeName: "João Silva",
    status: "REVIEW",
    cpf: "50095843019",
    id: "5",
  },
  {
    admissionDate: "12/08/2023",
    email: "ana@caju.com.br",
    employeeName: "Ana Souza",
    status: "REPROVED",
    cpf: "58215863051",
    id: "6",
  },
] as Registration[];
