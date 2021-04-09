import React, { useContext, FC } from "react";
import styled from "styled-components";
import { StateContext } from "state/state";

import { removeFromCart } from "state/actions";
import { deleteItemFromCart } from "state/actions";

import { Product } from "types/inventory";
import { IMAGE_URI } from "../../../api";
import QuantityInput from "atoms/QuantityInput";

type BasketItemProps = {
  id: number;
  quantity: number;
};

const BasketItem: FC<BasketItemProps> = ({ id, quantity }: BasketItemProps) => {
  const { state, dispatch } = useContext(StateContext);

  // const removeItem = () => dispatch(removeFromCart(id));

  const item: Product = state.inventory.find((e) => e.pk === id)!;
  const imageSrc = item.image ? IMAGE_URI(item.image.sm) : "";

  return (
    <Container
      onClick={() => {
        dispatch(removeFromCart(id));
      }}
    >
      <img
        src={
          imageSrc ? imageSrc : `${process.env.PUBLIC_URL}/images/noImage.png`
        }
        alt="Product image"
      />
      <div>
        <b> {item.name} </b>
      </div>
      <RedCrossWrapper>
        <RedCross
          onClick={() => {
            dispatch(deleteItemFromCart(id));
          }}
        >
          <path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path>
        </RedCross>
      </RedCrossWrapper>
      <QuantityInput quantity={quantity} id={id}></QuantityInput>
      <PricetagWrapper>
        <b>{item.price}</b>kr
      </PricetagWrapper>
    </Container>
  );
};

export default BasketItem;

const RedCrossWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: end;
`;

const RedCross = styled.svg`
  position: relative; 
  display: block; 
  fill: red;
  height: 1.5em;
  width: 1.5em;
  xmlns: http://www.w3.org/2000/svg;
  background-color: pink;  
`;

const PricetagWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-item: flex-end;
  padding-top: 15px;
`;

const Container = styled.div`
  width: 90%;
  height: 15%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  margin-bottom: 15px;
  padding: 10px;
  box-shadow: 2px 2px 7px #888888;
  border-radius: 3px;

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 4fr 1fr;

  img {
    width: 75%;
    grid-row: 1 / span 2;
  }
`;
