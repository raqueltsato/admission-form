import styled, { css, keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

export const Skeleton = styled.div<{ $width: string; $height: string }>`
  ${({ $width, $height }) => css`
    width: ${$width || "100%"};
    height: ${$height || "20px"};
  `}
  border-radius: 4px;
  background: linear-gradient(to right, #f6f7f8 4%, #edeef1 25%, #f6f7f8 36%);
  background-size: 200px 100%;
  animation: ${loadingAnimation} 2s infinite linear;
`;
