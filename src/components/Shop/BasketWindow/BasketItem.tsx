import React, { FC } from "react";
import styled from "styled-components";

type BasketItemProps = {
  text: string;
};

const BasketItem: FC<BasketItemProps> = ({ text }: BasketItemProps) => {
  return (
    <Container>
      <img
        src={`${process.env.PUBLIC_URL}/images/pk.png`}
        alt="Product image"
      />

      <span>
        <b> {text} </b>
      </span>

      <span>X</span>

      <span>
        Quantity:<b>3</b>
      </span>

      <span>
        <b>30</b>kr
      </span>
    </Container>
  );
};

export default BasketItem;

const Container = styled.div`
  width: 90%;
  border: 1px solid black;
  border-radius: 3px;
  height: 15%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 4fr 1fr;

  img {
    width: 75%;
    grid-row: 1 / span 2;
  }
`;
