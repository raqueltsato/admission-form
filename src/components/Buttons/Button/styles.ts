import styled, { css, DefaultTheme } from "styled-components";

const buttonVariant = ({
  colors,
  disabled,
}: {
  colors: DefaultTheme["colors"];
  disabled?: boolean;
}) => ({
  primary: css`
    background-color: ${disabled ? colors.gray : colors.green};
    cursor: ${disabled ? "not-allowed" : "pointer"};
    color: ${colors.white};
    outline: none;
    border: none;
  `,
  secondary: css`
    border: 1px solid ${disabled ? colors.gray : colors.green};
    color: ${disabled ? colors.gray : colors.green};
    cursor: ${disabled ? "not-allowed" : "pointer"};
    background-color: transparent;
  `,
});

const buttonSize = ({
  theme: { font, radius, space, colors },
  $bgColor,
  color,
}: {
  theme: DefaultTheme;
  disabled?: boolean;
  $bgColor?: string;
  color?: string;
}) => ({
  sm: css`
    font-size: ${font.sm};
    border-radius: ${radius.sm};
    padding: ${space.sm2} ${space.lg};
    background-color: ${$bgColor || "transparent"};
    color: ${color || colors.white};
    cursor: pointer;
    outline: none;
    border: none;
  `,
  md: css`
    border-radius: ${radius.xxl};
    padding: ${space.xs} ${space.xl};
    font-size: ${font.md};

    display: flex;
    align-items: center;
    height: 56px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    font-weight: 600;
    min-width: 130px;
    justify-content: center;
  `,
});

export const Button = styled.button<{
  $variant?: "primary" | "secondary";
  disabled?: boolean;
  $bgColor?: string;
  color?: string;
  $size: "sm" | "md";
}>`
  ${({ theme, $variant, disabled }) =>
    buttonVariant({ colors: theme.colors, disabled })[$variant || "primary"]}

  ${({ theme, $size, disabled, $bgColor, color }) =>
    buttonSize({ theme: theme, disabled, $bgColor, color })[$size]}
  
  ${({ disabled }) => css`
    cursor: ${disabled ? "not-allowed" : "pointer"};
    opacity: ${disabled ? 0.6 : 1};
  `}
`;
