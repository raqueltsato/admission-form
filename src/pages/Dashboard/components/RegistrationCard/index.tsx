import { ButtonSmall } from "~/components/Buttons";
import * as S from "./styles";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";
import { Registration, Status } from "~/core/api/types";
import { useRegistration } from "~/hooks/useRegistration";

type Props = {
  registration: Registration;
};

const RegistrationCard = ({ registration }: Props) => {
  const { employeeName, email, admissionDate, status } = registration;
  const { updateRegistrationHook } = useRegistration();

  const showReviewButton =
    status === Status.approved || status == Status.reproved;

  const showActionButton = status === Status.review;

  const handleAction = (newStatus: Status) => {
    console.log("Clcou em reprovar");
    const updatedData = {
      ...registration,
      status: newStatus,
    };
    updateRegistrationHook(updatedData);
  };

  return (
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
            <ButtonSmall
              onClick={() => handleAction(Status.reproved)}
              bgcolor="rgb(255, 145, 154)"
            >
              Reprovar
            </ButtonSmall>
            <ButtonSmall
              onClick={() => handleAction(Status.approved)}
              bgcolor="rgb(155, 229, 155)"
            >
              Aprovar
            </ButtonSmall>
          </>
        )}
        {showReviewButton && (
          <ButtonSmall
            onClick={() => handleAction(Status.review)}
            bgcolor="#ff8858"
          >
            Revisar novamente
          </ButtonSmall>
        )}
        <HiOutlineTrash />
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
