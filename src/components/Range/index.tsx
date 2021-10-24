import React, { useState } from "react";
import InputRange from "react-input-range";

import Wrapper from "./styled/Wrapper";
import InputWrapper from "./styled/InputWrapper";
import Dot from "./styled/Dot";

interface RangeProps {
  props?: any;
  callBack: any;
}

const Range = ({ ...props }: RangeProps) => {
  const [value, setValue] = useState<any>(50);
  const [labelActive, setLabelActive] = useState<boolean>(false);

  const debounce = (v: number, value: number) => {
    setLabelActive(true);
    let timer: any;
    if (labelActive) {
      timer = setTimeout(() => {
        setLabelActive(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
    if (v !== value) {
      clearTimeout(timer);
    }
  };

  const handleOnChange = (v: number) => {
    const { callBack } = props;
    debounce(v, value);
    setValue(v);
    callBack(v);
  };

  return (
    <Wrapper {...props}>
      <InputWrapper labelActive={labelActive}>
        <InputRange
          maxValue={100}
          minValue={0}
          step={1}
          formatLabel={(value: number) => `${value}%`}
          value={value}
          onChange={(value: any) => handleOnChange(value)}
        />
        <Dot left />
        <Dot center />
        <Dot right />
      </InputWrapper>
    </Wrapper>
  );
};

export default Range;
