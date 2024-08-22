import * as S from "./styles";
import { Props } from "./types";

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
      $variant={variant}
      $disabled={disabled}
      disabled={disabled}
      {...rest}
    >
      {children}
    </S.Button>
  );
};

export default Button;
