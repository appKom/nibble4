import React, { FC } from "react";
import styled from "styled-components";
import ShopWindow from "./ShopWindow";

const Window: FC = () => {
  return (
    <Container>
      <ShopWindow />
    </Container>
  );
};

export default Window;

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;
