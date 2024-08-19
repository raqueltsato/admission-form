import { useForm, Controller, UseFormProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TextField from "~/components/TextField";
import * as S from "./styles";
import Button from "~/components/Buttons";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { IconButton } from "~/components/Buttons/IconButton";
import { useHistory } from "react-router-dom";
import routes from "~/router/routes";
import { Status } from "~/core/api/types";
import { NewUser } from "./types";
import MaskedField from "~/components/MaskedField";
import { validateCPF } from "~/utils/cpf";

const validationSchema = z.object({
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

const NewUserPage = () => {
  const history = useHistory();
  const goToHome = () => {
    history.push(routes.dashboard);
  };

  const formOptions: UseFormProps<NewUser> = {
    resolver: zodResolver(validationSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      admissionDate: "",
      email: "",
      employeeName: "",
      status: Status.review,
      cpf: "",
    },
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<NewUser>(formOptions);

  const onSubmit = (data) => {
    console.log("RESULT", data);
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.Container>
        <S.Card>
          <IconButton onClick={() => goToHome()} aria-label="back">
            <HiOutlineArrowLeft size={24} />
          </IconButton>
          <S.InputWrapper>
            <Controller
              name="employeeName"
              control={control}
              render={({ field }) => (
                <TextField {...field} placeholder="Nome" label="Nome" />
              )}
            />
            {errors.employeeName && (
              <S.ErrorMessage>{errors.employeeName.message}</S.ErrorMessage>
            )}
          </S.InputWrapper>
          <S.InputWrapper>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="Email"
                  label="Email"
                  type="email"
                />
              )}
            />
            {errors.email && (
              <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
            )}
          </S.InputWrapper>
          <S.InputWrapper>
            <Controller
              name="cpf"
              control={control}
              render={({ field }) => (
                <MaskedField
                  {...field}
                  placeholder="CPF"
                  label="CPF"
                  mask="999.999.999-99"
                />
              )}
            />
            {errors.cpf && (
              <S.ErrorMessage>{errors.cpf.message}</S.ErrorMessage>
            )}
          </S.InputWrapper>
          <S.InputWrapper>
            <Controller
              name="admissionDate"
              control={control}
              render={({ field }) => (
                <TextField {...field} label="Data de admissão" type="date" />
              )}
            />
            {errors.admissionDate && (
              <S.ErrorMessage>{errors.admissionDate.message}</S.ErrorMessage>
            )}
          </S.InputWrapper>

          <Button onClick={() => {}}>Cadastrar</Button>
        </S.Card>
      </S.Container>
    </form>
  );
};

export default NewUserPage;
