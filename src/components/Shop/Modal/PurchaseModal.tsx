import React, { useContext, FC } from "react";
import styled from "styled-components";
import { StateContext } from "state/state";
import { calculateCartTotal } from "types/inventory";
import { OffWhite } from "utility/style";
import Button from "../../../atoms/Button";
import purchaseItems from "api/order";
import { setPurchaseComplete, setModalState } from "state/actions";
import { modalTypes } from "types/modal";

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
  const { cart, inventory, user } = state;

  const showPurchaseComplete = (show: boolean) =>
    dispatch(setPurchaseComplete(show));

  const totalPrice = calculateCartTotal(cart, inventory);
  const purchase = () => {
    purchaseItems(user!.pk, cart).then((response) => {
      if (response.status == 201) dispatch(setModalState(modalTypes.COMPLETE));
    });
  };

  return (
    <Container>
      <h3 style={styledText}> Confirm purchase </h3>
      <TotalDiv>
        <span> Your total </span>
        <hr />
        <span> {totalPrice} kr </span>
      </TotalDiv>
      <Button style={styledButton} onClick={purchase}>
        Purchase
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
