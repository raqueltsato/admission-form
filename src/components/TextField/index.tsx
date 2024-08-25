import { forwardRef } from "react";
import * as S from "./styles";
import { Props } from "./types";

const TextField = forwardRef<HTMLInputElement, Props>(
  ({ label, error, ...rest }: Props, ref) => {
    return (
      <>
        <label>{label}</label>
        <S.Input data-testid="text-field" ref={ref} {...rest} />
        <S.Error data-testid={`${label}-error`}>{error}</S.Error>
      </>
    );
  }
);

export default TextField;
