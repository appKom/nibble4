import React, { FC, useState, useContext } from "react";
import { StateContext } from "state/state";
import styled from "styled-components";
import Button from "atoms/Button";

const ButtonStyle = {
  margin: "10px",
  width: "20%",
};

const OlCoinsModal: FC = () => {
  const { state, dispatch } = useContext(StateContext);
  const [total, updateTotal] = useState(0);
  const values = [1, 5, 10, 100];

  const ButtonBar = values.map((value) => (
    <Button
      key={value}
      value={value}
      style={ButtonStyle}
      onClick={() => updateTotal(total + value)}
    >
      {"+" + value}
    </Button>
  ));

  const ButtonBarNegative = values.map((value) => (
    <Button
      key={value * -1}
      value={value * -1}
      style={ButtonStyle}
      onClick={() => updateTotal(total - value <= 0 ? 0 : total - value)}
    >
      {"-" + value}
    </Button>
  ));

  return (
    <Container>
      <h3> ØlCoins</h3>
      <div> {ButtonBar} </div>
      <div> {ButtonBarNegative} </div>
      <div> {total}øc</div>

      <Button> Legg til ØlCoins</Button>
    </Container>
  );
};

export default OlCoinsModal;

const Container = styled.div`
  text-align: center;
`;
