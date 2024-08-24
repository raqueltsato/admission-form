import { createPortal } from "react-dom";
import * as S from "./styles";
import { Props, Variant } from "./types";
import { MdClose, MdCheckCircleOutline } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useEffect, useState } from "react";

let showToastAction: ({
  variant,
  message,
}: Pick<Props, "variant" | "message">) => void;

const Toast = () => {
  const [showToast, setShowToast] = useState(false);
  const [variant, setVariant] = useState<Variant>("success");
  const [message, setMessage] = useState("");

  const handleShowToast = ({
    variant,
    message,
  }: Pick<Props, "variant" | "message">) => {
    setVariant(variant);
    setMessage(message);
    setShowToast(true);
  };

  const renderIcon = () => (
    <S.IconWrapper $variant={variant}>
      {variant === "success" ? (
        <MdCheckCircleOutline size={20} />
      ) : (
        <AiOutlineCloseCircle size={20} />
      )}
    </S.IconWrapper>
  );

  useEffect(() => {
    showToastAction = handleShowToast;
  }, []);

  useEffect(() => {
    showToast && setTimeout(() => setShowToast(false), 3000);
  }, [showToast]);

  return createPortal(
    <S.Wrapper
      $showToast={showToast}
      $variant={variant}
      data-testid="toast-wrapper"
    >
      {renderIcon()}
      {message}
      <S.CloseWrapper
        onClick={() => setShowToast((prev) => !prev)}
        data-testid="close-toast"
      >
        <MdClose aria-label="Fechar modal" />
      </S.CloseWrapper>
    </S.Wrapper>,
    document.querySelector("#root") || document.body
  );
};

export const showToast = ({
  variant,
  message,
}: Pick<Props, "variant" | "message">) => {
  showToastAction?.({ message, variant });
};

export default Toast;
