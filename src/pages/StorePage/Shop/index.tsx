import React, { FC } from "react";
import styled from "styled-components";
import Items from "./Items";
import Basket from "./Basket";

const Shop: FC = () => {
  return (
    <Container>
      <Items />
      <Basket />
    </Container>
  );
};

export default Shop;

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 100%;
  height: 100%;
  padding: 0.5rem 0;
`;
