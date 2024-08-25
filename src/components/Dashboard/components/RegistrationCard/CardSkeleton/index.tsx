import { Skeleton } from "~/Skeleton";
import * as S from "./styles";
const CardSkeleton = () => {
  return (
    <S.Wrapper>
      <Skeleton width="100%" height="150px" />
    </S.Wrapper>
  );
};

export default CardSkeleton;
