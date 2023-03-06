/* eslint-disable @typescript-eslint/no-explicit-any */
import type { InputProps } from "antd";
import { Input } from "antd";
import type { NumericFormatProps } from "react-number-format";
import { NumericFormat } from "react-number-format";

type NumericFormatInputProps = Omit<NumericFormatProps, "onChange"> &
  InputProps;

const NumericFormatInput = ({
  onChange,
  ...props
}: NumericFormatInputProps) => {
  return (
    <NumericFormat
      customInput={Input as any}
      thousandSeparator
      onValueChange={(values) => onChange?.((values.floatValue ?? 0) as any)}
      {...props}
    />
  );
};

export default NumericFormatInput;
