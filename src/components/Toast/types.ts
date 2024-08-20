export type Variant = "success" | "error";

export type Prop = {
  message: string;
  variant?: Variant;
  showToast: boolean;
  onClose: () => void;
};
