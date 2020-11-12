import React, { FC } from "react";
import styled from "styled-components";
import ShopWindow from "./ShopWindow";
import BasketWindow from "./BasketWindow";
import Modal from "./Modal";
const Window: FC = () => {
  return (
    <Container>
      <ShopWindow />
      <Modal active={true} />
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
