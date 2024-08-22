import { MdClose } from "react-icons/md";
import * as S from "./styles";
import Button from "~/components/Buttons";

type Prop = {
  title: React.ReactNode;
  description: string;
  isOpen: boolean;
  onDismiss: () => unknown;
  action: () => void;
};

const Modal = ({
  isOpen = false,
  onDismiss,
  title,
  description,
  action,
}: Prop) => {
  return (
    <S.Overlay onClick={onDismiss} $isOpen={isOpen}>
      <S.Content
        onClick={(e: Event) => e.stopPropagation()}
      >
        <S.Header>
          <S.Title>{title}</S.Title>
          <S.CloseWrapper>
            <MdClose
              aria-label="Fechar modal"
              onClick={onDismiss}
            />
          </S.CloseWrapper>
        </S.Header>
        <S.Description>
          {description
            ? description
            : "Deseja confirmar a ação?"}
        </S.Description>
        <S.ButtonsWrapper>
          <Button onClick={action}>Sim</Button>
          <Button
            onClick={onDismiss}
            $variant="secondary"
            type="button"
          >
            Cancelar
          </Button>
        </S.ButtonsWrapper>
      </S.Content>
    </S.Overlay>
  );
};

export default Modal;
