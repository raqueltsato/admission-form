import * as S from "./styles";
import { Props } from "./types";

const IconButton = (props: Props) => {
  return <S.IconButtonStyled {...props}>{props.children}</S.IconButtonStyled>;
};

export default IconButton;
