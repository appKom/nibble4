import React, { FC, useContext } from "react";
import styled from "styled-components";

import { StateContext } from "state/state";
import { addToCart, removeFromCart } from "../state/actions";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";

interface Props {
  quantity: number;
  id: number;
}

const QuantityInput: FC<Props> = ({ quantity, id }: Props) => {
  const { dispatch } = useContext(StateContext);
  return (
    <Container>
      <QuantityOperator>
        <HiMinusCircle
          onClick={() => {
            dispatch(removeFromCart(id));
          }}
        />
      </QuantityOperator>
      <QuantityDisplay>{quantity}</QuantityDisplay>
      <QuantityOperator>
        <HiPlusCircle
          onClick={() => {
            dispatch(addToCart(id));
          }}
        />
      </QuantityOperator>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  /*  border: 2px solid #0d5474; */
  box-sizing: border-box;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
`;

const QuantityOperator = styled.div`
  display: flex;
  align-items: center;
  > svg {
    color: #0d5474;
    transform: scale(1.5, 1.5);
  }
`;

const QuantityDisplay = styled.p`
  display: inline-block;
  width: 30px;
  text-align: center;
  font-size: 30px;
  margin: 0;
  align-items: center;
`;

export default QuantityInput;
