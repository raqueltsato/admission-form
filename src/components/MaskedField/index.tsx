import { Props as InputMaskProps } from "react-input-mask";

import * as S from "./styles";

type Props = {
  label?: string;
  error?: string;
} & InputMaskProps;

const MaskedField = (props: Props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <S.Input {...props} />
      <span style={{ fontSize: 12, color: "red" }}>{props.error}</span>
    </div>
  );
};

export default MaskedField;
