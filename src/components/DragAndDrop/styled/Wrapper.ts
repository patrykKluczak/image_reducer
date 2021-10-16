import styled from "styled-components";

export default styled.div`
  position: relative;

  span,
  svg {
    display: none;
  }

  label {
    width: 100%;
    max-width: 580px;
    margin: auto;
    height: 204px;
    border-radius: 30px;
    border: 2px dashed ${(props) => props.theme.colors.snuffDark};
  }
`;
