import Collumns from "./components/Columns";
import * as S from "./styles";
import { SearchBar } from "./components/Searchbar";
import { useRegistration } from "~/hooks/useRegistration";

const DashboardPage = () => {
  const { registrations, refetch, isRefetching } = useRegistration();

  return (
    <S.Container>
      <SearchBar refetch={refetch} isLoading={isRefetching} />
      <Collumns registrations={registrations || []} />
    </S.Container>
  );
};
export default DashboardPage;
