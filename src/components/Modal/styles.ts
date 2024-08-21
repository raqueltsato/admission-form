import styled, { css } from "styled-components";

export const Overlay = styled.div<{ $isOpen: boolean }>`
  ${({ $isOpen }) => css`
    display: ${$isOpen ? "block" : "none"};
    background-color: #1a203066;
    position: fixed;
    inset: 0;
    animation: overlayShow 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 200;

    @keyframes overlayShow {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `}
`;

export const Content = styled.div`
  ${({ theme: { colors, radius, space } }) => css`
    background-color: ${colors.white};
    border-radius: ${radius.md};
    padding: ${space.sm2};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: 20px;
    z-index: 200;
    width: 85%;

    @media (min-width: 768px) {
      padding: ${space.md};
      width: 500px;
    }
  `}
`;

export const Header = styled.div`
  ${({ theme: { space } }) => css`
    gap: ${space.sm};
  `}
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
`;

export const CloseWrapper = styled.div`
  cursor: pointer;
  ${({ theme: { colors, radius, space, font } }) => css`
    svg {
      padding: ${space.xxs};
      width: 24px;
      height: 24px;
      font-size: ${font.md};
      color: ${colors.black};
    }

    :hover {
      background-color: ${colors.green};
      border-radius: ${radius.xxxl};
    }
  `}
`;

export const Description = styled.p`
  ${({ theme: { space, font } }) => css`
    font-size: ${font.md};
    margin-bottom: ${space.xl};
  `}
  line-height: 150%;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
