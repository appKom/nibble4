import React, { FC } from "react";
import styled from "styled-components";

type BasketItemProps = {
  text: string;
};

const BasketItem: FC<BasketItemProps> = ({ text }: BasketItemProps) => {
  return <Container></Container>;
};

export default BasketItem;

const Container = styled.div`
  width: 90%;
  border: 2px solid black;
  border-radius: 3px;
  height: 10%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
`;
