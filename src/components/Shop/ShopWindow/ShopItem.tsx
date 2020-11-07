import React, { FC } from "react";
import styled from "styled-components";
import { Product } from "types/inventory";
import { IMAGE_URI } from "../../../api";

type ShopWindowItemProps = {
  storeObject: Product;
};

const ShopItem: FC<ShopWindowItemProps> = (storeObject) => {
  const imageSrc = storeObject.storeObject.image
    ? IMAGE_URI(storeObject.storeObject.image.sm)
    : "";

  return (
    <Container>
      <img src={imageSrc} alt="Product image" />

      <TextContainer>
        <span>
          <b> {storeObject.storeObject.name} </b>
        </span>

        <span>
          <b>{storeObject.storeObject.price}</b>kr
        </span>

        <DescSpan>{storeObject.storeObject.description} </DescSpan>
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
    width: 35%;
  }
`;

const TextContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 4fr 1fr;
`;

const DescSpan = styled.span`
  color: gray;
  font-size: 12px;
`;
