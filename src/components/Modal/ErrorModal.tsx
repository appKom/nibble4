import React, { FC } from "react";
import styled from "styled-components";

const CompleteModal: FC = () => {
  return (
    <Container>
      <h3> En feil oppsto! </h3>
      <p> Vennligst logg ut, og prøv igjen</p>
    </Container>
  );
};

export default CompleteModal;

const Container = styled.div`
  text-align: center;
`;
