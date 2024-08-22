import Collumns from "./components/Columns";
import * as S from "./styles";
import { SearchBar } from "./components/Searchbar";
import { useRegistration } from "~/hooks/useRegistration";

const DashboardPage = () => {
  const {
    setCpf,
    registrations,
    refetch,
    isRefetching: isLoading,
  } = useRegistration();

  return (
    <S.Container>
      <SearchBar {...{ setCpf, refetch, isLoading }} />
      <Collumns registrations={registrations} />
    </S.Container>
  );
};
export default DashboardPage;
