import React, { FC, useState } from "react";
import styled from "styled-components";
import OlCoins from "pages/StorePage/Shop/OlCoins";

const OlCoinsModal: FC = () => {
  const [total, updateTotal] = useState(0);

  const changeTotal = (costNumber: number) => {
    updateTotal((total) => total + costNumber);
  };

  return (
    <Container>
      <h3> ØlCoins</h3>
      <OlCoins signValue={1} func={changeTotal} />
      <OlCoins signValue={0} func={changeTotal} />
      <div> {total}</div>
    </Container>
  );
};

export default OlCoinsModal;

const Container = styled.div`
  text-align: center;
`;
