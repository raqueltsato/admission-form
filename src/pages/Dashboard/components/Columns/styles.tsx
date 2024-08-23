import styled, { DefaultTheme } from "styled-components";
import theme from "~/theme";

type StatusProps = "REVIEW" | "APPROVED" | "REPROVED";

const registrationStatusStyles = ({ colors }: DefaultTheme) => ({
  REVIEW: {
    background: colors.reviewColorBg,
    title: colors.reviewColorTitle,
  },
  APPROVED: {
    background: colors.approvedColorBg,
    title: colors.approvedColorTitle,
  },
  REPROVED: {
    background: colors.reprovedColorBg,
    title: colors.reprovedColorTitle,
  },
});

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  justify-content: center;
  margin-top: 24px;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColumnTitleContainer = styled.div<{ status: StatusProps }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ status }) =>
    registrationStatusStyles(theme)[status].background};
  margin: ${theme.space.xs} 0;
  border-radius: ${theme.radius.md};
  border: 1px solid
    ${({ status }) => registrationStatusStyles(theme)[status].title};
`;

export const UsersCount = styled.div<{ status: StatusProps }>`
  display: flex;
  gap: ${theme.space.xs};
  margin-right: ${theme.space.lg};
  align-items: center;
  color: ${theme.colors.lightestBlack};
  font-size: ${theme.font.md};
`;

export const Column = styled.div<{ status: StatusProps }>`
  height: auto;
  background-color: ${({ status }) =>
    registrationStatusStyles(theme)[status].background};
  border: 1px solid
    ${({ status }) => registrationStatusStyles(theme)[status].title};
  border-radius: ${theme.radius.md};
  min-height: 80vh;
  max-height: 80vh;
  overflow: auto;
`;

export const Title = styled.h3<{ status: StatusProps }>`
  margin: 0px;
  color: ${({ status }) => registrationStatusStyles(theme)[status].title};
  margin: 24px;
`;
