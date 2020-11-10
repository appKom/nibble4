import React, { FC, InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

const InputField: FC<Props> = ({ ...props }: Props) => {
  return <input {...props} />;
};

export default InputField;
