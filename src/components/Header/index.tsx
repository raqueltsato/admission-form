import * as S from "./styles";
import { Props } from "./types";

const Header = ({ title }: Props) => {
  return (
    <S.Wrapper>
      <h1>{title}</h1>
    </S.Wrapper>
  );
};

export default Header;
