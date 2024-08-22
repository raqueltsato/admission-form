import { HiRefresh } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import Button from "~/components/Buttons";
import { IconButton } from "~/components/Buttons/IconButton";
import MaskedField from "~/components/MaskedField";
import routes from "~/router/routes";
import * as S from "./styles";
import { Props } from "./types";
import Loading from "~/components/Loading";
import { validateCPF } from "~/utils/cpf";

export const SearchBar = ({ setCpf, refetch, isLoading }: Props) => {
  const history = useHistory();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  const handleFilter = (value: string) => {
    const isValid = validateCPF(value);
    if (isValid) {
      return setCpf(value);
    }

    if (!value) {
      setCpf(value);
      return refetch();
    }
  };

  return (
    <S.Container>
      <MaskedField
        mask="999.999.999-99"
        placeholder="Digite um CPF válido"
        onChange={(e) => handleFilter(e.target.value)}
      />
      <S.Actions>
        {isLoading ? (
          <Loading />
        ) : (
          <IconButton aria-label="refetch" onClick={refetch}>
            <HiRefresh />
          </IconButton>
        )}
        <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};
