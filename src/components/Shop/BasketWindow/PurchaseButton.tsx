import React, { useContext, FC } from "react";
import styled from "styled-components";
import { OnlineBlue } from "utility/style";
import { StateContext } from "state/state";
import { calculateCartTotal } from "types/inventory";
import purchaseItems from "api/order";

const PurchaseButton: FC = () => {
  const { state } = useContext(StateContext);
  const { cart, user, inventory } = state;

  const totalPrice = calculateCartTotal(cart, inventory);
  const insufficient = user!.balance - totalPrice <= 0 ? true : false;

  const purchase = () => {
    if (insufficient) return undefined;
    else {
      return purchaseItems(user!.pk, cart);
    }
  };

  return (
    <Button onClick={purchase}>
      {insufficient ? "Insufficient" : "Purchase"}
    </Button>
  );
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

  outline: none;
  margin-left: auto;
  margin-right: auto;
`;
