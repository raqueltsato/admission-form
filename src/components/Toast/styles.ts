import styled, { css } from "styled-components";

const toastVariant = {
  success: css`
    border-left: 8px solid green;
  `,
  error: css`
    border-left: 8px solid red;
  `,
};

export const Wrapper = styled.div<{
  $showToast: boolean;
  $variant: "success" | "error";
}>`
  ${({ $showToast }) => css`
    opacity: ${$showToast ? 1 : 0};
  `}
  position: fixed;
  top: 5%;
  right: 8px;
  width: 320px;
  height: 40px;
  background-color: white;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  font-size: 16px;
  z-index: 9999;
  transition: opacity 0.5s ease;
  border-left: 8px solid red;
  padding: 10px 20px 10px 40px;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ $variant }) => toastVariant[$variant || "success"]}
`;

export const CloseWrapper = styled.div`
  cursor: pointer;

  svg {
    padding: 4px;
    width: 1.5rem;
    height: 1.5rem;
    font-size: 16px;
    color: black;
  }

  :hover {
    background-color: #64a98c;
    border-radius: 50%;
  }
`;
