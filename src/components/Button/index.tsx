import React from "react";

import Text from "../Text";
import Wrapper from "./styled/Wrapper";

export interface ButtonProps {
  label: string;
  onClickFunc: () => void;
  isDisabled?: boolean;
}

const Button = ({ isDisabled = false, label, onClickFunc }: ButtonProps) => (
  <Wrapper isDisabled={isDisabled} onClick={onClickFunc}>
    <Text isUpperCase isBold isDisabled>
      {label}
    </Text>
  </Wrapper>
);

export default Button;
