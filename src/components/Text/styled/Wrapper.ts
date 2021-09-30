import styled, { css } from "styled-components";
import { TextProps } from "../index";

export default styled.span<TextProps>`
  font-size: 18px;
  font-family: "FiraSans-Regular";
  color: ${(props) => props.theme.colors.grey};

  ${({ isMedium }) =>
    isMedium &&
    css`
      font-family: "FiraSans-Medium";
    `}

  ${({ isBold }) =>
    isBold &&
    css`
      font-family: "FiraSans-SemiBold";
    `}

  ${({ isUpperCase }) =>
    isUpperCase &&
    css`
      text-transform: uppercase;
    `}

    ${({ isDisabled }) =>
    isDisabled &&
    css`
      color: ${(props) => props.theme.colors.snuff};
    `}
`;
