import React, { useContext, FC } from "react";
import styled from "styled-components";
import { OnlineBlue } from "utility/style";
import { StateContext } from "state/state";
import { calculateCartTotal } from "types/inventory";
import purchaseItems from "api/order";

const PurchaseButton: FC = () => {
  const { state } = useContext(StateContext);
  const { cart, user } = state;

  const purchase = () => purchaseItems(user!.pk, cart);

  return <Button onClick={purchase}>Purchase</Button>;
};

export default PurchaseButton;

const Button = styled.button`
  background-color: ${OnlineBlue};
  font-size: 26px;
  color: white;
  border: none;
  border-radius: 3px;
  width: 80%;
  height: 85%;

  outline: none;
  margin-left: auto;
  margin-right: auto;
  grid-column: 2;
  grid-row: 3;
`;
