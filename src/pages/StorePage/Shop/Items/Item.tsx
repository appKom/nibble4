import React, { FC } from "react";
import styled from "styled-components";
import { Product } from "types/inventory";

type ItemProps = {
  product: Product;
  addItem: (id: number) => void;
};

const Item: FC<ItemProps> = ({ product, addItem }: ItemProps) => {
  const imageSrc = product.image ? product.image.sm : "";

  const addToCart = () => addItem(product.pk);

  return (
    <Container onClick={addToCart}>
      <ImageContainer>
        <img
          src={
            imageSrc ? imageSrc : `${process.env.PUBLIC_URL}/images/noImage.png`
          }
          alt="Product image"
        />
      </ImageContainer>

      <TextContainer>
        <div>
          <b> {product.name} </b>
        </div>
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
  width: 90%;
  height: 175px;

  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 2px 2px 7px #888888;

  display: grid;
  grid-template-rows: 4fr 3fr;
`;

const TextContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 6fr 1fr;
`;

const ImageContainer = styled.div`
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 30%;
  }
`;
