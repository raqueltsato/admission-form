import styled, { css, DefaultTheme } from "styled-components";
import { ButtonStyleProps } from "./types";

const buttonVariant = ({
  colors,
  disabled,
}: {
  colors: DefaultTheme["colors"];
  disabled?: boolean;
}) => ({
  primary: css`
    background-color: ${disabled ? colors.gray : colors.green};
    color: ${colors.white};
    outline: none;
    border: none;
    opacity: ${disabled ? 0.6 : 1};
  `,
  secondary: css`
    border: 1px solid ${disabled ? colors.gray : colors.green};
    color: ${disabled ? colors.gray : colors.green};
    background-color: transparent;
  `,
  review: css`
    background-color: ${disabled ? colors.gray : colors.orange};
    color: ${colors.white};
    outline: none;
    border: none;
  `,
  approved: css`
    background-color: ${disabled ? colors.gray : colors.lightestGreen};
    color: ${colors.white};
    outline: none;
    border: none;
  `,
  reproved: css`
    background-color: ${disabled ? colors.gray : colors.lightestRed};
    color: ${colors.white};
    outline: none;
    border: none;
  `,
});

const buttonSize = ({
  theme: { font, radius, space },
}: {
  theme: DefaultTheme;
}) => ({
  sm: css`
    font-size: ${font.sm};
    border-radius: ${radius.sm};
    padding: ${space.sm2} ${space.lg};
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

export const Button = styled.button<ButtonStyleProps>`
  ${({ theme, $variant, disabled }) =>
    buttonVariant({ colors: theme.colors, disabled })[$variant || "primary"]}

  ${({ theme, $size }) => buttonSize({ theme: theme })[$size]}
  
  ${({ disabled }) => css`
    cursor: ${disabled ? "not-allowed" : "pointer"};
    opacity: ${disabled ? 0.6 : 1};
  `}
`;
