import { useMemo, useState } from "react";
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
import { useRegistration } from "~/hooks/useRegistration";
import { ChangeStatusProps, Props } from "./types";

const RegistrationCard = ({ registration }: Props) => {
  const { employeeName, email, admissionDate, status, id } = registration;
  const { updateRegistrationHook, deleteRegistrationHook } = useRegistration();
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
      <S.Card>
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
                bgColor="rgb(255, 145, 154)"
                size="sm"
              >
                Reprovar
              </Button>
              <Button
                onClick={() => setCurrentStatus(Status.approved)}
                bgColor="rgb(155, 229, 155)"
                size="sm"
              >
                Aprovar
              </Button>
            </>
          )}
          {showReviewButton && (
            <Button
              onClick={() => setCurrentStatus(Status.review)}
              bgColor="#ff8858"
              size="sm"
            >
              Revisar novamente
            </Button>
          )}
          <HiOutlineTrash onClick={() => setCurrentStatus("delete")} />
        </S.Actions>
      </S.Card>
      <Modal
        title={getCurrentStatus?.modalTitle}
        description={getCurrentStatus.description}
        onDismiss={handleDismissModal}
        isOpen={showConfirmationModal}
        action={handleConfirmAction}
      />
    </>
  );
};

export default RegistrationCard;
