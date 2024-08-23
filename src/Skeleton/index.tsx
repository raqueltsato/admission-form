import * as S from "./styles";

export function Skeleton({ width, height }: { width: string; height: string }) {
  return <S.Skeleton $width={width} $height={height} />;
}
