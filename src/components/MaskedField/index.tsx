import { forwardRef } from "react";
import * as S from "./styles";
import { Props } from "./types";
import { addCPFMask } from "~/utils/cpf";

const MaskedField = forwardRef<HTMLInputElement, Props>(
  ({ label, error, value, ...rest }: Props, ref) => {
    return (
      <div>
        <label>{label}</label>
        <S.Input
          ref={ref}
          value={addCPFMask(value as string)}
          maxLength={14}
          {...rest}
        />
        <S.Error>{error}</S.Error>
      </div>
    );
  }
);

export default MaskedField;
