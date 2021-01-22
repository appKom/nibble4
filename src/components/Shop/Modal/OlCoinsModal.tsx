import React, { FC, useState, createContext } from "react";
import styled from "styled-components";
import ButtonBar from "../OlCoins/ButtonBar";

const OlCoinsModal: FC = () => {
  const [total, updateTotal] = useState(0);

  type contextProps = {
    total: number;
  };

  const initalOlCoinsContext: contextProps = {
    total: 0,
  };

  const olCoinsContext = createContext<contextProps>(initalOlCoinsContext);

  const changeTotal = (costNumber: number) => {
    updateTotal((total) => total + costNumber);
  };

  return (
    <Container>
      <h3> ØlCoins</h3>
      <ButtonBar signValue={1} func={changeTotal} />
      <ButtonBar signValue={0} func={changeTotal} />
      <div> {total}</div>
    </Container>
  );
};

export default OlCoinsModal;

const Container = styled.div`
  text-align: center;
`;
