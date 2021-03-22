import React, { useContext, FC } from "react";
import styled from "styled-components";
import { StateContext } from "state/state";
import { calculateCartTotal } from "types/inventory";
import { OffWhite } from "utility/style";
import Button from "../../../atoms/Button";
import purchaseItems from "api/order";
import { setModalState } from "state/actions";
import { modalTypes } from "types/modal";
import { olCoinsTransaction } from "api/olcoins";
const styledButton = {
  gridColumn: 2,
  gridRow: 3,
  width: "80%",
  height: "85%",
  outline: "none",
  marginLeft: "auto",
  marginRight: "auto",
  boxShadow: "2px 2px 7px #888888",
};

const styledText = {
  gridColumn: 2,
  gridRow: 1,
};

const PurchaseModal: FC = () => {
  const { state, dispatch } = useContext(StateContext);
  const { cart, inventory, user, olCart, olCoinsUser } = state;

  const totalPrice = calculateCartTotal(cart, inventory);
  const olCoinsPrice = calculateCartTotal(olCart, inventory);

  const purchase = () => {
    if (totalPrice > 0)
      purchaseItems(user!.pk, cart)
        .then((response) => {
          if (response.ok) dispatch(setModalState(modalTypes.COMPLETE));
          else dispatch(setModalState(modalTypes.ERROR));
        })
        .catch(() => dispatch(setModalState(modalTypes.ERROR)));
    if (olCoinsPrice > 0)
      olCoinsTransaction(olCoinsUser!.id, olCoinsPrice * -1)
        .then((response) => {
          if (response.ok) dispatch(setModalState(modalTypes.COMPLETE));
          else dispatch(setModalState(modalTypes.ERROR));
        })
        .catch(() => dispatch(setModalState(modalTypes.ERROR)));
  };

  return (
    <Container>
      <h3 style={styledText}> Bekreft kjøp </h3>
      <TotalDiv>
        <span> Total: {totalPrice} kr</span>
        <hr />
        <span> Ølcoins: {olCoinsPrice} kr </span>
      </TotalDiv>
      <Button style={styledButton} onClick={purchase}>
        Kjøp
      </Button>
    </Container>
  );
};

export default PurchaseModal;

const Container = styled.div`
  text-align: center;

  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-columns: 1fr 3fr 1fr;
`;

const TotalDiv = styled.div`
  display: grid;

  width: 100%;
  height: 60%;
  padding-top: 10px;

  background-color: ${OffWhite};
  margin-left: auto;
  margin-right: auto;
  border-radius: 2px;

  grid-column: 2;
  grid-row: 2;
  hr {
    width: 100%;
    overflow: hidden;
    border-top: 1px dashed #aeb2a8;
    height: 0px;
  }
  box-shadow: 2px 2px 7px #888888;
`;
