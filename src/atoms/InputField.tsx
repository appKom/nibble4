import React, { ChangeEvent, KeyboardEvent, FC } from "react";

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  password?: boolean;
};

const InputField: FC<Props> = ({
  value,
  onChange,
  onKeyUp,
  password,
}: Props) => {
  const inputType = password ? "password" : "text";
  return (
    <input
      type={inputType}
      value={value}
      onChange={onChange}
      onKeyUp={onKeyUp}
    />
  );
};

export default InputField;
