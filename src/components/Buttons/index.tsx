import styled, { css } from "styled-components";

const buttonVariant = {
  primary: css`
    ${({ theme: { colors } }) => css`
      background-color: ${colors.green};
    `}
  `,
  secondary: css`
    ${({ theme: { colors } }) => css`
      border: 1px solid ${colors.green};
      color: ${colors.green};
    `}
  `,
};

const Button = styled.button<{ $variant?: "primary" | "secondary" }>`
  ${({ theme: { colors, radius, space, font } }) => css`
    border-radius: ${radius.xxl};
    padding: ${space.xs} ${space.xl};
    color: ${colors.white};
    font-size: ${font.md};
  `}
  outline: none;
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  height: 56px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  font-weight: 600;
  min-width: 130px;
  justify-content: center;
  ${({ $variant }) => buttonVariant[$variant || "primary"]}
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
