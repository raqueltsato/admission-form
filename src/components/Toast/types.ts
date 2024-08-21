export type Variant = "success" | "error";

export type Props = {
  message: string;
  variant: Variant;
  showToast: boolean;
  onClose: () => void;
};
