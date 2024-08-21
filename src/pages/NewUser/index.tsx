import { useForm, Controller, UseFormProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TextField from "~/components/TextField";
import * as S from "./styles";
import Button from "~/components/Buttons";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { IconButton } from "~/components/Buttons/IconButton";
import { useHistory } from "react-router-dom";
import { Status } from "~/core/api/types";
import { NewUser } from "./types";
import MaskedField from "~/components/MaskedField";
import { validateCPF } from "~/utils/cpf";
import { useState } from "react";
import Modal from "~/components/Modal";
import { useRegistration } from "~/hooks/useRegistration";
import { formatDate } from "~/utils/date";
import routes from "~/router/routes";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useHistory();
  const { createRegistrationHook, refetch } = useRegistration();

  const goToHome = () => {
    history.push(routes.dashboard);
  };

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  const handleClickButton = (e: Event) => {
    e.preventDefault();
    toggleModal();
  };

  const formOptions: UseFormProps<NewUser> = {
    resolver: zodResolver(validationSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      admissionDate: "",
      email: "",
      employeeName: "",
      cpf: "",
    },
  };

  const {
    handleSubmit,
    register,
    setValue,
    control,
    formState: { errors, isValid },
  } = useForm<NewUser>(formOptions);

  const onSubmit = (data: NewUser) => {
    const params = {
      ...data,
      admissionDate: formatDate(data.admissionDate),
      status: Status.review,
    };
    createRegistrationHook(params);
    refetch();
    toggleModal();
    goToHome();
  };

  return (
    <form>
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
                <TextField
                  {...field}
                  ref={field.ref}
                  placeholder="Nome"
                  label="Nome"
                />
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
                  ref={field.ref}
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
            <MaskedField
              {...register("cpf")}
              placeholder="CPF"
              label="CPF"
              mask="999.999.999-99"
              onChange={(e) => setValue("cpf", e.target.value)}
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
                <TextField
                  {...field}
                  ref={field.ref}
                  label="Data de admissão"
                  type="date"
                />
              )}
            />
            {errors.admissionDate && (
              <S.ErrorMessage>{errors.admissionDate.message}</S.ErrorMessage>
            )}
          </S.InputWrapper>
          <Button
            onClick={handleClickButton}
            $disabled={!isValid}
            type="button"
          >
            Cadastrar
          </Button>
        </S.Card>
      </S.Container>
      <Modal
        title="Cadastrar novo funcionário"
        onDismiss={toggleModal}
        isOpen={isModalOpen}
        action={handleSubmit(onSubmit)}
      />
    </form>
  );
};

export default NewUserPage;
