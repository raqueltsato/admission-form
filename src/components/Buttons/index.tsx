import styled, { css, DefaultTheme } from "styled-components";

const buttonVariant = ({
  colors,
  $disabled,
}: {
  colors: DefaultTheme["colors"];
  $disabled?: boolean;
}) => ({
  primary: css`
    background-color: ${$disabled ? colors.gray : colors.green};
    cursor: ${$disabled ? "not-allowed" : "pointer"};
    opacity: ${$disabled ? 0.6 : 1};
  `,
  secondary: css`
    border: 1px solid ${$disabled ? colors.gray : colors.green};
    color: ${$disabled ? colors.gray : colors.green};
    cursor: ${$disabled ? "not-allowed" : "pointer"};
    opacity: ${$disabled ? 0.6 : 1};
    background-color: transparent;
  `,
});

const Button = styled.button<{
  $variant?: "primary" | "secondary";
  $disabled?: boolean;
}>`
  ${({ theme: { colors, radius, space, font }, $disabled }) => css`
    border-radius: ${radius.xxl};
    padding: ${space.xs} ${space.xl};
    color: ${colors.white};
    font-size: ${font.md};
    cursor: ${$disabled ? "not-allowed" : "pointer"};
    opacity: ${$disabled ? 0.6 : 1};
  `}
  outline: none;
  display: flex;
  align-items: center;
  border: none;
  height: 56px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  font-weight: 600;
  min-width: 130px;
  justify-content: center;
  ${({ theme, $variant, $disabled }) =>
    buttonVariant({ colors: theme.colors, $disabled })[$variant || "primary"]}
`;

export const ButtonSmall = styled.button<{
  bgcolor?: string;
  color?: string;
}>`
  ${({ theme: { colors, radius, space, font }, bgcolor, color }) => css`
    font-size: ${font.sm};
    border-radius: ${radius.sm};
    padding: ${space.xxs} ${space.sm};
    background-color: ${bgcolor ?? "transparent"};
    color: ${color ?? colors.white};
    cursor: pointer;
    outline: none;
    border: none;
  `}
`;

export default Button;
