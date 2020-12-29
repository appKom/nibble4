import React, { useContext, FC } from "react";
import styled from "styled-components";
import ShopWindow from "./ShopWindow";
import BasketWindow from "./BasketWindow";
import { StateContext } from "state/state";

const Window: FC = () => {
  const { state } = useContext(StateContext);
  const { modalActive } = state;

  return (
    <Container>
      <ShopWindow />
      <BasketWindow />
    </Container>
  );
};

export default Window;

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 100%;
  height: 100%;
`;
