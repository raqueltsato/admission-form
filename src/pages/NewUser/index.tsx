import { useForm, Controller, UseFormProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextField from "~/components/TextField";
import * as S from "./styles";
import Button from "~/components/Buttons/Button";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { Status } from "~/core/api/types";
import { NewUser } from "./types";
import MaskedField from "~/components/MaskedField";
import { removeCPFMask } from "~/utils/cpf";
import { useState } from "react";
import Modal from "~/components/Modal";
import { useRegistration } from "~/hooks/useRegistration";
import { formatDate } from "~/utils/date";
import routes from "~/router/routes";
import IconButton from "~/components/Buttons/IconButton";
import { validationNewUserSchema } from "~/schemas/newUser";

const NewUserPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useHistory();
  const { createRegistrationHook, refetch } = useRegistration();

  const goToHome = () => {
    history.push(routes.dashboard);
  };

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleModal();
  };

  const formOptions: UseFormProps<NewUser> = {
    resolver: zodResolver(validationNewUserSchema),
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
      cpf: removeCPFMask(data.cpf),
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
                  error={errors.employeeName?.message}
                />
              )}
            />
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
                  error={errors.email?.message}
                />
              )}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <MaskedField
              {...register("cpf")}
              placeholder="CPF"
              label="CPF"
              mask="999.999.999-99"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setValue("cpf", e.target.value)
              }
              error={errors.cpf?.message}
            />
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
                  error={errors.admissionDate?.message}
                />
              )}
            />
          </S.InputWrapper>
          <Button onClick={handleClickButton} disabled={!isValid} type="button">
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
