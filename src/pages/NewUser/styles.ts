import styled, { css } from "styled-components";
import { Button } from "~/components/Buttons/Button/styles";
import { IconButtonStyled } from "~/components/Buttons/IconButton/styles";

export const Title = styled.h2``;

export const Container = styled.div`
  ${({ theme: { space } }) => css`
    gap: ${space.sm};
  `}
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 64px 20px 0;
`;

export const Card = styled.div`
  ${({ theme: { space, radius } }) => css`
    margin-top: ${space.xxl};
    box-shadow: 0px 4px 16px #0003;
    border-radius: ${radius.sm};
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${space.sm};
    padding: 48px;

    ${IconButtonStyled} {
      margin-bottom: ${space.xs};
      align-items: flex-start;
    }

    ${Button} {
      align-self: flex-end;
    }

    @media (max-width: 768px) {
      box-shadow: none;
      margin-top: 0;
      padding: 0;
      margin: 0 20px;
    }
  `}
`;

export const Header = styled.div`
  ${({ theme: { space } }) => css`
    gap: ${space.sm2};
  `}

  display: flex;
  align-items: center;
`;

export const InputWrapper = styled.div``;
