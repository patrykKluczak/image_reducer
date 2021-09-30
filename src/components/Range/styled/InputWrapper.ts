import styled, { css } from "styled-components";

export default styled.div<any>`
  .input-range {
    position: relative;
    width: 100%;
  }

  .input-range__label {
    color: ${(props) => props.theme.colors.greyLabel};
    font-size: 15px;
    font-family: "FiraSans-Regular";
    transform: translateZ(0);
    white-space: nowrap;
  }

  .input-range__label--value {
    position: absolute;
    bottom: -68px;
    opacity: 0;
    transition: opacity 0.5s;
    z-index: 10;
    transform: translateX(10%);

    ${({ labelActive }) =>
      labelActive &&
      css`
        opacity: 1;
      `}
  }

  .input-range__label--min {
    bottom: -52px;
    position: absolute;
    left: 0;
  }

  .input-range__label--max {
    bottom: -52px;
    position: absolute;
    right: 0;
  }

  .input-range__track {
    background: ${(props) => props.theme.colors.greyTrack};
    border-radius: 0.3rem;
    cursor: pointer;
    display: block;
    height: 8px;
    position: relative;
  }

  .input-range__track--background {
    left: 0;
    margin-top: -0.15rem;
    position: absolute;
    right: 0;
    top: 50%;
  }

  .input-range__slider {
    appearance: none;
    background: linear-gradient(
      268.28deg,
      ${(props) => props.theme.colors.heliotrope} 3.87%,
      ${(props) => props.theme.colors.purpleHeart} 92.97%
    );
    cursor: pointer;
    display: block;
    height: 1rem;
    margin-top: -20px;
    outline: none;
    position: absolute;
    top: 50%;
    transform: rotate(45deg);
    width: 32px;
    height: 32px;
  }
`;
