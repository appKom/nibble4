import React, { FC } from "react";
import styled from "styled-components";
import { Product } from "types/inventory";
import { IMAGE_URI } from "../../../api";

type ShopWindowItemProps = {
  product: Product;
  addItem: (id: number) => void;
};

const ShopItem: FC<ShopWindowItemProps> = ({
  product,
  addItem,
}: ShopWindowItemProps) => {
  const imageSrc = product.image ? IMAGE_URI(product.image.sm) : "";

  const addToCart = () => addItem(product.pk);

  return (
    <Container onClick={addToCart}>
      <img src={imageSrc} alt="Product image" />

      <TextContainer>
        <span>
          <b> {product.name} </b>
        </span>

        <span>
          <b>{product.price}</b>kr
        </span>

        <DescSpan>{product.description} </DescSpan>
      </TextContainer>
    </Container>
  );
};

export default ShopItem;

const Container = styled.div`

  padding: 5px;
  background-color: white;
  border-radius: 3px;
  width: 90%;
  height: 90%;

  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 2px 2px 7px #888888;

  display: grid;
  grid-template-rows; 4fr 3fr;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
  }
`;

const TextContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 6fr 1fr;
`;

const DescSpan = styled.span`
  color: gray;
  font-size: 12px;
`;
