import styled, { css, keyframes } from "styled-components";

const animationSpin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Loader = styled.div`
  ${({ theme: { colors, radius } }) => css`
    border: 4px solid ${colors.gray};
    border-top: 4px solid ${colors.green};
    border-radius: ${radius.xxxl};
  `}
  display: inline-block;
  width: 20px;
  height: 20px;
  animation: ${animationSpin} 2s linear infinite;
`;
