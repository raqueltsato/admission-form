import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme: { space } }) => css`
    display: flex;
    flex-direction: column;
    gap: ${space.xxs};
    margin: ${space.sm};
    border-radius: ${space.xs};
    position: relative;
    height: 150px;
    min-width: 250px;
  `}
`;
