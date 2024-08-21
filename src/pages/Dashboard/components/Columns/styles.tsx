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

export const Column = styled.div<{ status: StatusProps }>`
  height: auto;
  background-color: ${({ status }) =>
    registrationStatusStyles(theme)[status].background};
  border-radius: 32px;
  min-height: 80vh;
  max-height: 80vh;
`;

export const TitleColumn = styled.h3<{ status: StatusProps }>`
  margin: 0px;
  color: ${({ status }) => registrationStatusStyles(theme)[status].title};
  margin: 24px;
`;

export const CollumContent = styled.div`
  overflow: auto;
  max-height: 85%;
`;
