import styled, { css } from "styled-components";

export default styled.div<{
  left?: boolean;
  right?: boolean;
  center?: boolean;
}>`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: ${(props) => props.theme.colors.greyTrack};
  position: absolute;
  top: 40px;

  ${({ left }) =>
    left &&
    css`
      left: 20%;
      transform: translateX(calc(-50% + 8px));
    `}

  ${({ right }) =>
    right &&
    css`
      left: 80%;
      transform: translateX(calc(-50% + 8px));
    `}

  ${({ center }) =>
    center &&
    css`
      left: 50%;
      transform: translateX(calc(-50% + 16px));
    `}
`;
