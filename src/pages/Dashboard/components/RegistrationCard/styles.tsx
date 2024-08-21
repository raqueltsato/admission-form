import styled, { css } from "styled-components";

export const Card = styled.div`
  ${({ theme: { colors, space } }) => css`
    display: flex;
    flex-direction: column;
    gap: ${space.xxs};
    border: 4px solid ${colors.white};
    margin: ${space.sm};
    border-radius: ${space.xs};
    padding: ${space.sm};
    background-color: ${colors.white};
  `}
  h3,
  p {
    margin: 0;
  }
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const IconAndText = styled.div`
  ${({ theme: { space } }) => css`
    gap: ${space.xs};
  `}
  display: flex;
  align-items: center;
`;

export const Actions = styled.div`
  ${({ theme: { space } }) => css`
    margin-top: ${space.xs};
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${space.xxs};
  `}

  svg {
    cursor: pointer;
  }
`;
