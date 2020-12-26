import React, { FC } from "react";
import styled from "styled-components";

const PurchaseModal: FC = () => {
  return (
    <Container>
      <h3> Purchase Complete!</h3>
      <img
        src={`${process.env.PUBLIC_URL}/images/complete.gif`}
        alt="description of gif"
      />
      <p> Logging out in xxs </p>
    </Container>
  );
};

export default PurchaseModal;

const Container = styled.div`
  text-align: center;

  img {
    width: 80%;
  }
`;
