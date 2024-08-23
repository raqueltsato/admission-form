export type Props = {
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  $bgColor?: string;
  color?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
