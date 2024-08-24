import { useContext } from "react";
import { HiOutlineUsers } from "react-icons/hi";
import RegistrationCard from "../RegistrationCard";
import CardSkeleton from "../RegistrationCard/CardSkeleton";
import { Registration, Status } from "~/core/api/types";
import { RegistrationContext } from "~/context/useRegistrationContext";
import * as S from "./styles";

const allColumns = [
  { status: Status.review, title: "Pronto para revisar" },
  { status: Status.approved, title: "Aprovado" },
  { status: Status.reproved, title: "Reprovado" },
];

const Collumns = () => {
  const {
    values: { registrations, isRefetching },
  } = useContext(RegistrationContext);

  const registrationsGroupByStatus = registrations.reduce(
    (accGrouped, registration) => {
      const structuredGroup = structuredClone(accGrouped);

      structuredGroup[registration.status].push(registration);

      return structuredGroup;
    },
    { REVIEW: [], APPROVED: [], REPROVED: [] } as Record<
      Registration["status"],
      Registration[]
    >
  );

  const renderContent = (status: Status) => {
    if (isRefetching) {
      return (
        <>
          <CardSkeleton />
          <CardSkeleton />
        </>
      );
    }

    return registrationsGroupByStatus[status]?.map((registration) => {
      return (
        <RegistrationCard registration={registration} key={registration.id} />
      );
    });
  };

  return (
    <S.Container>
      {allColumns.map((column) => {
        return (
          <S.ColumnContainer key={column.title}>
            <S.ColumnTitleContainer status={column.status}>
              <S.Title status={column.status}>{column.title}</S.Title>
              <S.UsersCount status={column.status}>
                <HiOutlineUsers size={16} />
                {registrationsGroupByStatus[column.status].length}
              </S.UsersCount>
            </S.ColumnTitleContainer>
            <S.Column status={column.status} key={column.title}>
              {renderContent(column.status)}
            </S.Column>
          </S.ColumnContainer>
        );
      })}
    </S.Container>
  );
};
export default Collumns;
