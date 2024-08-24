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
`;

export const Card = styled.div`
  ${({ theme: { space, radius } }) => css`
    margin-top: ${space.xxl};
    box-shadow: 0px 4px 16px #0003;
    border-radius: ${radius.sm};
    width: 500px;
    padding: ${space.xxl};
    display: flex;
    flex-direction: column;
    gap: ${space.sm};

    ${IconButtonStyled} {
      margin-bottom: ${space.xs};
      align-items: flex-start;
    }

    ${Button} {
      align-self: flex-end;
    }
  `}
`;

export const InputWrapper = styled.div``;
