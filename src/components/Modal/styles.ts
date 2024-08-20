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
  background-color: white;
  border-radius: 8px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 12px;
  gap: 20px;
  z-index: 200;
  width: 85%;

  @media (min-width: 768px) {
    padding: 20px;
    width: 500px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-flow: row;
  gap: 16px;
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

  svg {
    padding: 4px;
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1rem;
    color: black;
  }

  :hover {
    background-color: #64a98c;
    border-radius: 50%;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 32px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
