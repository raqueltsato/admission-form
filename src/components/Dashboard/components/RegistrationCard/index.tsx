import { useContext, useMemo, useState } from "react";
import * as S from "./styles";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";
import Button from "~/components/Buttons/Button";
import Modal from "~/components/Modal";
import { Status } from "~/core/api/types";
import { ChangeStatusProps, Props } from "./types";
import theme from "~/theme";
import { RegistrationContext } from "~/context/useRegistrationContext";

const RegistrationCard = ({ registration }: Props) => {
  const {
    actions: { deleteRegistrationHook, updateRegistrationHook },
  } = useContext(RegistrationContext);

  const { employeeName, email, admissionDate, status, id } = registration;
  const [currentStatus, setCurrentStatus] = useState<Status | "delete" | null>(
    null
  );

  const getCurrentStatus: ChangeStatusProps = useMemo(() => {
    const statusAction = (status: Status) =>
      updateRegistrationHook({
        ...registration,
        status,
      });

    return {
      [Status.approved]: {
        modalTitle: "Confirmar aprovação?",
        description: `Tem certeza de que deseja aprovar este funcionário? Esta ação moverá o registro para a coluna "Aprovado".`,
        newStatus: Status.approved,
        action: () => statusAction(Status.approved),
      },
      [Status.reproved]: {
        modalTitle: "Confirmar reprovação?",
        description: `Tem certeza de que deseja reprovar este funcionário? Esta ação moverá o registro para a coluna "Reprovado".`,
        newStatus: Status.reproved,
        action: () => statusAction(Status.reproved),
      },
      [Status.review]: {
        modalTitle: "Confirmar revisão? ",
        description: `Deseja revisar novamente este funcionário? Esta ação moverá o registro para a coluna "Pronto pra Revisar".`,
        newStatus: Status.review,
        action: () => statusAction(Status.review),
      },
      delete: {
        modalTitle: "Excluir funcionário?",
        description:
          "Tem certeza de que deseja excluir este funcionário? Esta ação é permanente.",
        newStatus: null,
        action: () => deleteRegistrationHook(id),
      },
    }[currentStatus || "delete"];
  }, [
    currentStatus,
    deleteRegistrationHook,
    id,
    registration,
    updateRegistrationHook,
  ]);

  const showConfirmationModal = !!currentStatus;

  const handleDismissModal = () => setCurrentStatus(null);

  const showReviewButton =
    status === Status.approved || status == Status.reproved;

  const showActionButton = status === Status.review;

  const handleConfirmAction = () => {
    getCurrentStatus.action();
    handleDismissModal();
  };

  return (
    <>
      <S.Card data-testid="registration-card">
        <S.IconAndText>
          <HiOutlineUser />
          <h3>{employeeName}</h3>
        </S.IconAndText>
        <S.IconAndText>
          <HiOutlineMail />
          <p>{email}</p>
        </S.IconAndText>
        <S.IconAndText>
          <HiOutlineCalendar />
          <span>{admissionDate}</span>
        </S.IconAndText>
        <S.Actions>
          {showActionButton && (
            <>
              <Button
                onClick={() => setCurrentStatus(Status.reproved)}
                $bgColor={theme.colors.lightestRed}
                size="sm"
                data-testid="reprove-button"
              >
                Reprovar
              </Button>
              <Button
                onClick={() => setCurrentStatus(Status.approved)}
                $bgColor={theme.colors.lightestGreen}
                size="sm"
                data-testid="approve-button"
              >
                Aprovar
              </Button>
            </>
          )}
          {showReviewButton && (
            <Button
              onClick={() => setCurrentStatus(Status.review)}
              $bgColor={theme.colors.orange}
              size="sm"
              data-testid="review-button"
            >
              Revisar novamente
            </Button>
          )}
          <S.DeleteWrapper>
            <HiOutlineTrash
              data-testid="delete-button"
              size={20}
              onClick={() => setCurrentStatus("delete")}
            />
          </S.DeleteWrapper>
        </S.Actions>
      </S.Card>
      <Modal
        title={getCurrentStatus?.modalTitle}
        description={getCurrentStatus.description}
        onDismiss={handleDismissModal}
        isOpen={showConfirmationModal}
        action={handleConfirmAction}
        data-testid="card-modal"
      />
    </>
  );
};

export default RegistrationCard;
