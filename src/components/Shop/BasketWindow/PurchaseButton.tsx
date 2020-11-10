import React, { FC } from "react";
import styled from "styled-components";
import { OnlineBlue } from "utility/style";

type ButtonProps = {
  isDisabled: boolean;
};

const PurchaseButton: FC<ButtonProps> = ({ isDisabled }: ButtonProps) => {
  return <Button> {isDisabled ? "Inncuficient" : "Purchase"} </Button>;
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
