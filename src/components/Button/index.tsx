import React from "react";

import Text from "../Text";
import Wrapper from "./styled/Wrapper";

export interface ButtonProps {
  label: string;
  onClickFunc: () => void;
  isDisabled?: boolean;
  props?: any;
}

const Button = ({
  isDisabled = false,
  label,
  onClickFunc,
  ...props
}: ButtonProps) => (
  <Wrapper isDisabled={isDisabled} onClick={onClickFunc} {...props}>
    <Text isUpperCase isBold isDisabled>
      {label}
    </Text>
  </Wrapper>
);

export default Button;
