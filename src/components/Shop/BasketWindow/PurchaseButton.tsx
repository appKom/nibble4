import React, { FC } from "react";
import styled from "styled-components";
import { OnlineBlue } from "style";

type ButtonProps = {
  text: string;
};

const PurchaseButton: FC<ButtonProps> = ({ text }: ButtonProps) => {
  return <Button> {text} </Button>;
};

export default PurchaseButton;

const Button = styled.button`
  background-color: ${OnlineBlue};
  font-size: 26px;
  color: white;
  border: none;
  border-radius: 3px;
  width: 80%;
  height: 90%;

  margin-left: auto;
  margin-right: auto;
`;
