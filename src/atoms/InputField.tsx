import React, { ChangeEvent, FC, InputHTMLAttributes, useState } from "react";
import styled from "styled-components";
import { OffWhite } from "utility/style";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  inputLabel?: string;
};
type LabelProps = { label: string };

const InputLabel: FC<LabelProps> = ({ label }: LabelProps) =>
  label ? <label>{label}</label> : null;

const InputField: FC<Props> = ({ inputLabel, ...props }: Props) => {
  return (
    <Container>
      <InputLabel label={inputLabel || ""} />
      <input id={inputLabel} {...props} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    width: max-content;
    font-size: 1rem;
  }
  input {
    color: 000;
    font-size: 1.5em;
    border: none;
    background-color: ${OffWhite};
    border-radius: 5px;
    padding: 0.5rem 1rem;
  }
  input:focus {
    outline: none;
  }
`;

export default InputField;
