import { forwardRef } from "react";
import * as S from "./styles";
import { Props } from "./types";
import { ReactInputMask } from "react-input-mask";

const MaskedField = forwardRef<ReactInputMask, Props>(
  ({ label, error, ...rest }: Props, ref) => {
    return (
      <div>
        <label>{label}</label>
        <S.Input ref={ref} {...rest} />
        <S.Error>{error}</S.Error>
      </div>
    );
  }
);

export default MaskedField;
