import React from "react";

import Wrapper from "./styled/Wrapper";

export interface TextProps {
  children: React.ReactNode;
  props?: any;
  isMedium?: boolean;
  isBold?: boolean;
  isUpperCase?: boolean;
  isDisabled?: boolean;
}

const Text = ({
  isBold = false,
  isUpperCase = false,
  isMedium = false,
  isDisabled = false,
  children,
  props,
}: TextProps) => (
  <Wrapper
    isBold={isBold}
    isMedium={isMedium}
    isUpperCase={isUpperCase}
    isDisabled={isDisabled}
    {...props}
  >
    {children}
  </Wrapper>
);

export default Text;
