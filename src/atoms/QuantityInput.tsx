import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  quantity: number;
}

const QuantityInput: FC<Props> = ({ quantity }: Props) => (
  <Container>
    <DecrementButton>-</DecrementButton>
    <QuantityDisplay>{quantity}</QuantityDisplay>
    <IncrementButton>+</IncrementButton>
  </Container>
);

const Container = styled.div`
  border: 2px solid #0d5474;
  box-sizing: border-box;
  border-radius: 3px;
`;

const DecrementButton = styled.p`
  display: inline-block;
  width: 30px;
  font-size: 30px;
  font-weight: bold;
  margin: 0;
  background-color: #0d5474;
  color: white;
  border-radius: 0 0 3px 3px;
`;

const QuantityDisplay = styled.p`
  display: inline-block;
  width: 30px;
  text-align: center;
  font-size: 30px;
  margin: 0;
`;

const IncrementButton = styled.p`
  display: inline-block;
  width: 30px;
  font-size: 30px;
  font-weight: bold;
  margin: 0;
  background-color: #0d5474;
  box-sizing: border-box;
  color: white;
`;

export default QuantityInput;
