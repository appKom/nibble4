import React, { FC, useContext } from "react";
import styled from "styled-components";
import ButtonBar from "../OlCoins/ButtonBar";
import Button from "../../../atoms/Button";
import { StateContext } from "state/state";
const style1 = {
  gridColumn: 2,
  gridRow: 1,
};

const OlCoinsModal: FC = () => {
  const { state } = useContext(StateContext);
  const { newOlCoins } = state;

  const addCoins = () => console.log("Added: " + newOlCoins + "ølcoins");

  return (
    <Container>
      <h3 style={style1}> ØlCoins</h3>
      <ButtonBar signValue={1} />
      <ButtonBar signValue={0} />
      <div
        style={{
          gridColumn: 2,
          gridRow: 2,
        }}
      >
        {newOlCoins}
      </div>

      <Button
        style={{
          gridColumn: 2,
          gridRow: 3,
        }}
        onClick={addCoins}
      >
        Add
      </Button>
    </Container>
  );
};

export default OlCoinsModal;

const Container = styled.div`
  text-align: center;
  height: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;
