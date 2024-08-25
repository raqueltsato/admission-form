import * as S from "./styles";
import { ButtonStyleProps, Props } from "./types";

const Button = ({
  size = "md",
  variant = "primary",
  children,
  disabled,
  ...rest
}: Props) => {
  return (
    <S.Button
      $size={size}
      $variant={variant.toLowerCase() as ButtonStyleProps["$variant"]}
      disabled={disabled}
      {...rest}
    >
      {children}
    </S.Button>
  );
};

export default Button;
