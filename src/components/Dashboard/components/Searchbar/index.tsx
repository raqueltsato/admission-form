import { HiRefresh } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import Button from "~/components/Buttons/Button";
import routes from "~/router/routes";
import * as S from "./styles";
import Loading from "~/components/Loading";
import IconButton from "~/components/Buttons/IconButton";
import { useContext } from "react";
import { RegistrationContext } from "~/context/useRegistrationContext";
import SearchFieldWithSuggestions from "~/components/SearchFieldWithSuggestions";

export const SearchBar = () => {
  const {
    actions: { refetch },
    values: { isRefetching },
  } = useContext(RegistrationContext);

  const history = useHistory();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  return (
    <S.Container>
      <SearchFieldWithSuggestions placeholder="Digite um CPF válido" />
      <S.Actions>
        {isRefetching ? (
          <Loading />
        ) : (
          <IconButton
            aria-label="Atualizar dados"
            onClick={refetch}
            iconName={HiRefresh}
          />
        )}
        <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};
