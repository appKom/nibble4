import React, { FC } from "react";
import styled from "styled-components";
import PurchaseButton from "./PurchaseButton";
import BasketItem from "./BasketItem";
import { OnlineOrange } from "style";

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

      <CostDiv>
        <span>
          <b> Total Cost</b>
        </span>
        <span id="pris">
          <b> 100kr</b>
        </span>
        <span id="olcoins">
          <b> 20øc</b>
        </span>
      </CostDiv>
      <PurchaseButton text="Purchase" />
    </Container>
  );
};

export default BasketWindow;

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 8fr 1fr 1fr;

  text-align: left;
  background-color: white;
  width: 85%;
  height: 70%;
  border-top: 10px solid ${OnlineOrange};
  border-radius: 3px;
  box-shadow: 2px 2px 7px #888888;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;

  div {
    overflow: auto;
  }
`;

const CostDiv = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
  grid-template-rows: 1fr 1fr;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  width: 100%;
  text-align: left;

  font-size: 16px;
  border-bottom: 1px dashed gray;

  #olcoins {
    grid-column: 2;
    grid-row: 2;
  }
`;
