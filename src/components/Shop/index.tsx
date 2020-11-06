import React, { FC } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Window from "./ShopWindow";

const Shop: FC = () => {
  return (
    <Container>
      <Navbar />
      <Window />
    </Container>
  );
};

export default styled(Shop)``;

const Container = styled.div``;
