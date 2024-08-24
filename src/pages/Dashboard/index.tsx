import Collumns from "~/components/Dashboard/components/Columns";
import * as S from "./styles";
import { SearchBar } from "~/components/Dashboard/components/Searchbar";

const DashboardPage = () => {
  return (
    <S.Container>
      <SearchBar />
      <Collumns />
    </S.Container>
  );
};
export default DashboardPage;
