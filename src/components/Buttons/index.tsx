import styled, { css } from "styled-components";

const buttonVariant = {
  primary: css`
    background-color: #64a98c;
  `,
  secondary: css`
    border: 1px solid #64a98c;
    color: #64a98c;
  `,
};

const Button = styled.button<{ variant?: "primary" | "secondary" }>`
  outline: none;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 36px;
  padding: 8px 32px;
  cursor: pointer;
  height: 56px;
  color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  font-size: 16px;
  font-weight: 600;
  min-width: 130px;
  justify-content: center;
  ${({ variant }) => buttonVariant[variant || "primary"]}
`;

export const ButtonSmall = styled.button<{
  bgcolor?: string;
  color?: string;
}>`
  font-size: 12px;
  outline: none;
  border-radius: 4px;
  border: none;
  padding: 4px 16px;
  background-color: ${(props) => props.bgcolor ?? "none"};
  color: ${(props) => props.color ?? "#000"};
  cursor: pointer;
`;

export default Button;
