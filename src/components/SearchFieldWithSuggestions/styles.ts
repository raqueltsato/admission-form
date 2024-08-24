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

export const SuggestionsList = styled.ul`
  ${({ theme: { colors, space, radius } }) => css`
    background-color: ${colors.white};
    max-height: 210px;
    overflow-y: scroll;
    margin-top: ${space.xxs};
    padding: 0;
    list-style: none;
    position: absolute;
    width: 300px;
    z-index: 1000;
    border-radius: ${radius.sm};
    box-shadow: 0px 4px 16px #0003;
  `}
`;

export const SuggestionItem = styled.li`
  ${({ theme: { colors, space, radius } }) => css`
    padding: ${space.xs} ${space.sm2};
    border-radius: ${radius.sm};
    &:hover {
      background-color: ${colors.hover};
    }
    &:hover > :first-child {
      color: ${colors.red};
    }
    cursor: pointer;
  `}
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NameDescription = styled.p`
  ${({ theme: { space } }) => css`
    font-weight: 600;
    margin: 0 0 0 ${space.xs};
  `}
`;

export const CpfWrapper = styled.span`
  ${({ theme: { space } }) => css`
    margin-top: ${space.xxs};
  `}
  display: flex;
  align-items: center;
`;

export const CpfDescription = styled.p`
  ${({ theme: { space } }) => css`
    margin: 0 0 0 ${space.xs};
  `}
`;
