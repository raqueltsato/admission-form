import { IconType } from "react-icons";

export type Props = {
  iconName: IconType;
  size?: number;
} & React.HTMLAttributes<HTMLButtonElement>;
