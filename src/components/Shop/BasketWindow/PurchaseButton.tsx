import React, { useContext, FC } from "react";
import styled from "styled-components";
import { OnlineBlue } from "utility/style";
import { StateContext } from "state/state";
import { calculateCartTotal } from "types/inventory";
import purchaseItems from "api/order";
import { setModal } from "state/actions";

const PurchaseButton: FC = () => {
  const { state, dispatch } = useContext(StateContext);
  const { cart, user, inventory, modalActive } = state;

  const totalPrice = calculateCartTotal(cart, inventory);
  const insufficient = user!.balance - totalPrice <= 0 ? true : false;
  const ShowModal = (show: boolean) => dispatch(setModal(show));

  const purchase = () => {
    if (insufficient || totalPrice <= 0) return undefined;
    else {
      return ShowModal(true);
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
