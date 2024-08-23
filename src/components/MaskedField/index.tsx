import * as S from "./styles";
import { forwardRef } from "react";
import { Props } from "./types";

const MaskedField = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <S.Input {...props} ref={ref} />
      <span style={{ fontSize: 12, color: "red" }}>{props.error}</span>
    </div>
  );
});

export default MaskedField;
