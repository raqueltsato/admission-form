import * as S from "./styles";

const Skeleton = ({ width, height }: { width: string; height: string }) => {
  return <S.Skeleton $width={width} $height={height} />;
};

export default Skeleton;
