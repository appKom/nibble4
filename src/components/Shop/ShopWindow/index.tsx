import React, { FC } from "react";
import styled from "styled-components";
import ShopItem from "./ShopItem";

const ShopWindow: FC = () => {
  return (
    <Container>
      <ShopItem />
      <ShopItem />
      <ShopItem />
      <ShopItem />
      <ShopItem />
      <ShopItem />
      <ShopItem />
      <ShopItem />
      <ShopItem />
      <ShopItem />
      <ShopItem />
      <ShopItem />
    </Container>
  );
};

export default ShopWindow;

const Container = styled.div`
  background-color: #f7f7fb;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;

  display: grid;
  overflow: scroll;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
`;
