import React, { FC } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Window from "./Window";

const Shop: FC = () => {
  return (
    <Container>
      <Navbar />
      <Window />
    </Container>
  );
};

export default Shop;

const Container = styled.div`
  height: 100%;
`;
