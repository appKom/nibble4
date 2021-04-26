import React, { FC } from "react";
import styled from "styled-components";
import { Product } from "types/inventory";
import { IMAGE_URI } from "api";

type ItemProps = {
  product: Product;
  addItem: (id: number) => void;
};

const Item: FC<ItemProps> = ({ product, addItem }: ItemProps) => {
  const imageSrc = product.image ? IMAGE_URI(product.image.sm) : "";

  const addToCart = () => addItem(product.pk);

  return (
    <Container onClick={addToCart}>
      <img
        src={
          imageSrc ? imageSrc : `${process.env.PUBLIC_URL}/images/noImage.png`
        }
        alt="Product image"
      />

      <TextContainer>
        <b> {product.name} </b>
        <div>
          <b>{product.price}</b>kr
        </div>
      </TextContainer>
    </Container>
  );
};

export default Item;

const Container = styled.div`
  padding: 5px;
  background-color: white;
  border-radius: 3px;
  width: 300px;
  height: 200px;
  margin: 5px;
  box-shadow: 2px 2px 7px #888888;

  display: grid;
  grid-template-rows: 4fr 3fr;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
  }
`;

const TextContainer = styled.div`
  width: 95%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
