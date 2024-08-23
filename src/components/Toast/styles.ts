import styled, { css } from "styled-components";

const toastVariant = {
  success: css`
    ${({ theme: { colors } }) => css`
      background-color: ${colors.toastGreen};
    `}
  `,
  error: css`
    ${({ theme: { colors } }) => css`
      background-color: ${colors.lightestRed};
      color: ${colors.white};
    `}
  `,
};

export const Wrapper = styled.div<{
  $showToast: boolean;
  $variant: "success" | "error";
}>`
  ${({ $showToast, theme: { space, colors, font, radius } }) => css`
    opacity: ${$showToast ? 1 : 0};
    position: fixed;
    top: 5%;
    right: ${space.xs};
    width: 320px;
    height: 40px;
    padding: ${space.xs} ${space.md};
    border-radius: ${radius.md};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    font-size: ${font.md};
    z-index: 9999;
    transition: opacity 0.5s ease;
    color: ${colors.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
  ${({ $variant }) => toastVariant[$variant || "success"]}
`;

export const IconWrapper = styled.div<{ $variant: "success" | "error" }>`
  display: flex;
  align-items: center;
  ${({ theme: { colors }, $variant }) => css`
    color: ${$variant === "success" ? colors.lightestBlack : colors.white};
  `}
`;

export const CloseWrapper = styled.div`
  cursor: pointer;
  ${({ theme: { colors, radius, space, font } }) => css`
    svg {
      padding: ${space.xxs};
      font-size: ${font.md};
      color: ${colors.black};
    }

    :hover {
      background-color: ${colors.green};
      border-radius: ${radius.xxxl};
    }
  `};
`;
