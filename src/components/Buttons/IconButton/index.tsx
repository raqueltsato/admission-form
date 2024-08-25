import * as S from "./styles";
import { Props } from "./types";

const IconButton = ({ iconName: IconName, size, ...rest }: Props) => {
  return (
    <S.IconButtonStyled {...rest}>
      <IconName size={size} />
    </S.IconButtonStyled>
  );
};

export default IconButton;
