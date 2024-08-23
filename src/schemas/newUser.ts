import { z } from "zod";
import { validateCPF } from "~/utils/cpf";

export const validationNewUserSchema = z.object({
  employeeName: z
    .string()
    .min(2, "Digite o nome completo")
    .regex(/^[a-zA-Z]/, "O nome deve começar com uma letra")
    .regex(/.*\s+.*/, "O nome deve nome e sobrenome"),
  email: z.string().email("Adicione um e-mail válido"),
  cpf: z.string().refine((value) => validateCPF(value), {
    message: "CPF inválido",
  }),
  admissionDate: z.string({ message: "Insira uma data" }),
});
