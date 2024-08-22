import styled, { css } from "styled-components";

export const IconButtonStyled = styled.button`
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
