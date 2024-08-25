export type Props = {
  variant?: "primary" | "secondary" | "REVIEW" | "APPROVED" | "REPROVED";
  size?: "sm" | "md";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonStyleProps = {
  $variant?: "primary" | "secondary" | "review" | "approved" | "reproved";
  disabled?: boolean;
  $size: "sm" | "md";
};
