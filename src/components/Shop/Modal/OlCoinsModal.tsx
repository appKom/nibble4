import React, { FC, useState, useContext } from "react";
import styled from "styled-components";
import ButtonBar from "../OlCoins/ButtonBar";
import Button from "../../../atoms/Button";
import { StateContext } from "state/state";

const OlCoinsModal: FC = () => {
  const { state, dispatch } = useContext(StateContext);
  const { newOlCoins } = state;

  const addCoins = () => console.log("Added: " + newOlCoins + "ølcoins");

  return (
    <Container>
      <h3> ØlCoins</h3>
      <ButtonBar signValue={1} />
      <ButtonBar signValue={0} />
      <div> {newOlCoins} </div>

      <Button onClick={addCoins}> Add </Button>
    </Container>
  );
};

export default OlCoinsModal;

const Container = styled.div`
  text-align: center;
`;
