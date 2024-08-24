import styled, { css } from "styled-components";

export const Input = styled.input`
  ${({ theme: { colors, radius, space, font } }) => css`
    padding: 0 ${space.xs};
    border-radius: ${radius.xs};
    background-color: ${colors.white};
    font-size: ${font.md};
    border-radius: ${radius.md};
  `}
  vertical-align: middle;
  width: 100%;
  min-height: 36px;
  border: 1px solid rgba(36, 28, 21, 0.3);
  transition: all 0.2s ease-in-out 0s;
  line-height: 18px;
  font-weight: normal;
  :focus {
    outline: none;
    border: 1px solid #007c89;
    box-shadow: inset 0 0 0 1px #007c89;
  }
`;

export const Error = styled.span`
  ${({ theme: { colors, font } }) => css`
    color: ${colors.red};
    font-size: ${font.sm};
  `}
`;
