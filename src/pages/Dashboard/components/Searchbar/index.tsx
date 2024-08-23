import { HiRefresh } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import Button from "~/components/Buttons/Button";
import MaskedField from "~/components/MaskedField";
import routes from "~/router/routes";
import * as S from "./styles";
import Loading from "~/components/Loading";
import { removeCPFMask, validateCPF } from "~/utils/cpf";
import IconButton from "~/components/Buttons/IconButton";
import { useContext } from "react";
import { RegistrationContext } from "~/context/useRegistrationContext";

export const SearchBar = () => {
  const {
    actions: { setCpf, refetch },
    values: { isRefetching },
  } = useContext(RegistrationContext);

  const history = useHistory();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  const handleFilter = (value: string) => {
    const isValid = validateCPF(value);
    if (isValid) {
      return setCpf(removeCPFMask(value));
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleFilter(e.target.value)
        }
      />
      <S.Actions>
        {isRefetching ? (
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
