import React, { FC } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Window from "./Window";
import CategoryBar from "./CategoryBar";

const Shop: FC = () => {
  return (
    <Container>
      <Navbar />
      <CategoryBar />
      <Window />
    </Container>
  );
};

export default Shop;

const Container = styled.div`
  height: 100%;
`;
