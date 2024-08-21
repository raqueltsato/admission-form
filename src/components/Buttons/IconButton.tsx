import styled, { css } from "styled-components";

export const _IconButtonStyled = styled.button`
  ${({ theme: { colors, space, radius } }) => css`
    border: 2px solid ${colors.green};
    padding: ${space.xxs};
    border-radius: ${radius.lg};
    cursor: pointer;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    svg {
      color: ${colors.green};
    }
  `}
`;

type IconButtonProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

export const IconButton = (props: IconButtonProps) => {
  return <_IconButtonStyled {...props}>{props.children}</_IconButtonStyled>;
};
