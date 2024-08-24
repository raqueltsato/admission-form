import { forwardRef } from "react";
import * as S from "./styles";
import { Props } from "./types";

const TextField = forwardRef<HTMLInputElement, Props>(
  ({ label, error, ...rest }: Props, ref) => {
    return (
      <div>
        <label>{label}</label>
        <S.Input ref={ref} {...rest} data-testid="text-field" />
        <S.Error>{error}</S.Error>
      </div>
    );
  }
);

export default TextField;
