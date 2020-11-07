import React, { useContext, FC } from "react";
import styled from "styled-components";
import ShopItem from "./ShopItem";
import { OnlineOrange, OffWhite } from "utility/style";
import { StateContext } from "state/state";
import { Product } from "types/inventory";

const ShopWindow: FC = () => {
  const { state } = useContext(StateContext);

  const shopItems = state.inventory.map((item) => (
    <ShopItem key={item.pk} storeObject={item} />
  ));

  return <Container>{shopItems}</Container>;
};

export default ShopWindow;

const Container = styled.div`
  background-color: ${OffWhite};
  width: 95%;
  margin-left: auto;
  margin-right: auto;

  height: 70%;
  display: grid;
  overflow: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${OnlineOrange};
    border-radius: 2px;
  }
`;
