import { Status } from "~/core/api/types";

export type Props = {
  variant?: "primary" | "secondary" | Status;
  size?: "sm" | "md";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonStyleProps = {
  $variant?: "primary" | "secondary" | "review" | "approved" | "reproved";
  disabled?: boolean;
  $size: "sm" | "md";
};
