import React, { FC } from "react";
import styled from "styled-components";

const BasketWindow: FC = () => {
  return (
    <Container>
      <h2> Your Cart</h2>
    </Container>
  );
};

export default BasketWindow;

const Container = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  text-align: left;
  background-color: white;
  width: 90%;

  border-top: 10px solid orange;

  border-radius: 3px;
  box-shadow: 2px 2px 7px #888888;

  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
`;
