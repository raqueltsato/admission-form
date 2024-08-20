import * as S from "./styles";
import { Prop } from "./types";
import { MdClose } from "react-icons/md";

const Toast = ({ message, variant = "success", showToast, onClose }: Prop) => {
  return (
    <S.Wrapper $showToast={showToast} $variant={variant}>
      {message}
      <S.CloseWrapper onClick={onClose}>
        <MdClose aria-label="Fechar modal" />
      </S.CloseWrapper>
    </S.Wrapper>
  );
};

export default Toast;
