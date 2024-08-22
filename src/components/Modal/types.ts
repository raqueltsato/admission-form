export type Props = {
  title: React.ReactNode;
  description?: string;
  isOpen: boolean;
  onDismiss: () => unknown;
  action: () => void;
};
