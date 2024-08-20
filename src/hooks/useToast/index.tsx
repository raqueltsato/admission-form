import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ToastComponent from "~/components/Toast";
import { Variant } from "~/components/Toast/types";
import { UseToastProps, UseToastReturn } from "./types";

export const useToast = (): UseToastReturn => {
  const [showToast, setShowToast] = useState(false);
  const [variant, setVariant] = useState<Variant>("success");
  const [message, setMessage] = useState("");

  const handleShowToast = ({ variant, message }: UseToastProps) => {
    setVariant(variant);
    setMessage(message);
    setShowToast(true);
  };

  const handleCloseToast = () => setShowToast(false);

  useEffect(() => {
    showToast && setTimeout(() => setShowToast(false), 3000);
  }, [showToast]);

  const Toast = () =>
    createPortal(
      <ToastComponent
        message={message}
        showToast={showToast}
        onClose={handleCloseToast}
        variant={variant}
      />,
      document.querySelector("#root") || document.body
    );

  return { Toast, handleShowToast };
};
