import styled from "styled-components";

export default styled.h2`
  position: absolute;
  top: 122px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.colors.alto};
  font-size: 18px;

  span {
    font-family: "FiraSans-Bold";
    color: ${(props) => props.theme.colors.electricViolet};
  }
`;
