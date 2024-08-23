import { Registration, Status } from "~/core/api/types";
import * as S from "./styles";
import RegistrationCard from "~/pages/Dashboard/components/RegistrationCard";
import { Props } from "./types";

const allColumns = [
  { status: Status.review, title: "Pronto para revisar" },
  { status: Status.approved, title: "Aprovado" },
  { status: Status.reproved, title: "Reprovado" },
];

const Collumns = ({ registrations }: Props) => {
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

  return (
    <S.Container>
      {allColumns.map((collum) => {
        return (
          <S.Column status={collum.status} key={collum.title}>
            <>
              <S.TitleColumn status={collum.status}>
                {collum.title}
              </S.TitleColumn>
              <S.CollumContent>
                {registrationsGroupByStatus[collum.status]?.map(
                  (registration) => {
                    return (
                      <RegistrationCard
                        registration={registration}
                        key={registration.id}
                      />
                    );
                  }
                )}
              </S.CollumContent>
            </>
          </S.Column>
        );
      })}
    </S.Container>
  );
};
export default Collumns;
