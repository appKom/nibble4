import React, { FC } from "react";
import styled from "styled-components";
import PurchaseButton from "./PurchaseButton";
import BasketItem from "./BasketItem";
const BasketWindow: FC = () => {
  return (
    <Container>
      <h2> Your Cart</h2>
      <div>
        <BasketItem text="Powerking" />
        <BasketItem text="Powerking" />
        <BasketItem text="Powerking" />
        <BasketItem text="Powerking" />
      </div>
      <PurchaseButton text="Purchase" />
    </Container>
  );
};

export default BasketWindow;

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 9fr 1fr;

  text-align: left;
  background-color: white;
  width: 95%;

  border-top: 10px solid orange;
  border-radius: 3px;
  box-shadow: 2px 2px 7px #888888;

  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
`;
