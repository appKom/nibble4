import React, { FC } from "react";
import styled from "styled-components";
import Button from "atoms/Button";

type ButtonBarProps = {
  signValue: number;
  func: (costNumber: number) => void;
};

const ButtonStyle = {
  marginRight: "10px",
  width: "20%",
};

const ButtonBar: FC<ButtonBarProps> = ({ signValue, func }: ButtonBarProps) => {
  const values = [1, 5, 10, 100];
  console.log(func);
  const ButtonBarComponent = values.map((value) => (
    <Button
      key={value}
      value={signValue ? value : value * -1}
      style={ButtonStyle}
    >
      {signValue ? value : value * -1}
    </Button>
  ));
  return <div> {ButtonBarComponent} </div>;
};

export default styled(ButtonBar)`
  ButtonBarComponent {
  }
`;
