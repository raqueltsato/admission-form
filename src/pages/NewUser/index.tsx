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
import { useContext, useState } from "react";
import Modal from "~/components/Modal";
import { formatDate } from "~/utils/date";
import routes from "~/router/routes";
import IconButton from "~/components/Buttons/IconButton";
import { validationNewUserSchema } from "~/schemas/newUser";
import { RegistrationContext } from "~/context/useRegistrationContext";
import { format } from "date-fns";

const NewUserPage = () => {
  const {
    actions: { createRegistrationHook, refetch },
  } = useContext(RegistrationContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useHistory();

  const goToHome = () => {
    history.push(routes.dashboard);
  };

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleModal();
  };

  const today = format(new Date(), "yyyy-MM-dd");

  const formOptions: UseFormProps<NewUser> = {
    resolver: zodResolver(validationNewUserSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      admissionDate: today,
      email: "",
      employeeName: "",
      cpf: "",
    },
  };

  const {
    handleSubmit,
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
          <S.Title>Cadastro de funcionário</S.Title>
          <IconButton
            onClick={() => goToHome()}
            aria-label="Voltar"
            iconName={HiOutlineArrowLeft}
            size={24}
          />
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
                  placeholder="E-mail"
                  label="E-mail"
                  type="email"
                  error={errors.email?.message}
                />
              )}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <Controller
              name="cpf"
              control={control}
              render={({ field }) => (
                <MaskedField
                  {...field}
                  ref={field.ref}
                  placeholder="CPF"
                  label="CPF"
                  error={errors.cpf?.message}
                />
              )}
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
                  data-testid="date"
                />
              )}
            />
          </S.InputWrapper>
          <Button
            onClick={handleClickButton}
            data-testid="register-button"
            disabled={!isValid}
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
