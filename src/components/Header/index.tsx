import * as S from "./styles";
import { Props } from "./types";

const Header = ({ children }: Props) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Header;
