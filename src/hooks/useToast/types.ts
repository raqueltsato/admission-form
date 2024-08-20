import { Variant } from "~/components/Toast/types";

export type UseToastProps = {
  message: string;
  variant: Variant;
};

export type UseToastReturn = {
  handleShowToast: (params: UseToastProps) => void;
  Toast: () => JSX.Element;
};
