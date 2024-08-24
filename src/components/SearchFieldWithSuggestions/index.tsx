import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import * as S from "./styles";
import { Props } from "./types";
import { addCPFMask, removeCPFMask, validateCPF } from "~/utils/cpf";
import { Registration } from "~/core/api/types";
import { HiOutlineUser } from "react-icons/hi";
import { BsCardHeading } from "react-icons/bs";
import { RegistrationContext } from "~/context/useRegistrationContext";
import MaskedField from "../MaskedField";

const SearchFieldWithSuggestions = ({ label, ...rest }: Props) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState<
    Registration[]
  >([]);
  const [inputValue, setInputValue] = useState<string>("");

  const isValidCPF = validateCPF(inputValue);

  const showError = !isValidCPF && inputValue.length === 11;

  const {
    actions: { setCpf, refetch },
    values: { registrations },
  } = useContext(RegistrationContext);

  const registrationsSearchBase = useMemo(
    () => registrations,
    [!!registrations.length]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = removeCPFMask(e.target.value);

    setInputValue(value);

    if (value.length > 0) {
      const matches = registrationsSearchBase.filter((suggestion) => {
        const escapedValue = value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const regex = new RegExp(`^${escapedValue}`, "i");
        return regex.test(suggestion.cpf);
      });

      setFilteredSuggestions(matches);
    } else {
      refetch();
      setFilteredSuggestions([]);
      setCpf("");
    }
  };

  const handleSuggestionClick = (suggestion: Registration) => {
    setInputValue(suggestion.cpf);
    setFilteredSuggestions([]);
    setCpf(suggestion.cpf);
  };

  const handleFetchRegistrations = useCallback(() => {
    if (isValidCPF) {
      setCpf(inputValue);
      setFilteredSuggestions([]);
    } else {
      setCpf("");
    }
  }, [inputValue, isValidCPF, setCpf]);

  useEffect(() => {
    handleFetchRegistrations();
  }, [handleFetchRegistrations]);

  return (
    <div>
      <MaskedField
        label={label}
        value={inputValue}
        error={showError ? "CPF inválido" : ""}
        onChange={handleChange}
        {...rest}
      />

      {filteredSuggestions.length > 0 && (
        <S.SuggestionsList>
          {filteredSuggestions.map((suggestion, index) => (
            <S.SuggestionItem
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              <S.NameWrapper>
                <S.IconWrapper>
                  <HiOutlineUser size={16} />
                </S.IconWrapper>
                <S.NameDescription>{suggestion.employeeName}</S.NameDescription>
              </S.NameWrapper>
              <S.CpfWrapper>
                <BsCardHeading size={16} />
                <S.CpfDescription>
                  {addCPFMask(suggestion.cpf)}
                </S.CpfDescription>
              </S.CpfWrapper>
            </S.SuggestionItem>
          ))}
        </S.SuggestionsList>
      )}
    </div>
  );
};

export default SearchFieldWithSuggestions;
