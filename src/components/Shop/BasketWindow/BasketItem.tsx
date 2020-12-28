import React, { useContext, FC } from "react";
import styled from "styled-components";
import { StateContext } from "state/state";
import { removeFromCart } from "state/actions";
import { Product } from "types/inventory";
import { IMAGE_URI } from "../../../api";

type BasketItemProps = {
  id: number;
  quantity: number;
};

const BasketItem: FC<BasketItemProps> = ({ id, quantity }: BasketItemProps) => {
  const { state, dispatch } = useContext(StateContext);

  const removeItem = () => dispatch(removeFromCart(id));

  const item: Product = state.inventory.find((e) => e.pk === id)!;
  const imageSrc = item.image ? IMAGE_URI(item.image.sm) : "";

  return (
    <Container onClick={removeItem}>
      <img
        src={
          imageSrc ? imageSrc : `${process.env.PUBLIC_URL}/images/noImage.png`
        }
        alt="Product image"
      />

      <span>
        <b> {item.name} </b>
      </span>
      <span></span>

      <span>
        Quantity:<b>{quantity}</b>
      </span>

      <span>
        <b>{item.price}</b>kr
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
