import styled, { css } from "styled-components";

export default styled.div<{ isDisabled: boolean }>`
  width: 213px;
  height: 56px;
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 300ms;

  background: linear-gradient(
    268.03deg,
    ${(props) => props.theme.colors.heliotrope} 5.49%,
    ${(props) => props.theme.colors.purpleHeart} 90.18%
  );

  &:hover {
    background: linear-gradient(
      268.03deg,
      ${(props) => props.theme.colors.electricViolet} 5.49%,
      ${(props) => props.theme.colors.purpleHeart} 90.18%
    );
  }

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      pointer-events: none;
      background: linear-gradient(
        268.03deg,
        ${(props) => props.theme.colors.manatee} 5.49%,
        ${(props) => props.theme.colors.spunPearl} 90.18%
      );
    `};
`;
