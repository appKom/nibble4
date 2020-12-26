import React, { FC } from "react";
import styled from "styled-components";

const PurchaseModal: FC = () => {
  return (
    <Container>
      <h3> Takk for kjøpet! </h3>
    </Container>
  );
};

export default PurchaseModal;

const Container = styled.div`
  text-align: center;
`;
