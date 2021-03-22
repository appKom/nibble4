import React, { FC } from "react";
import styled from "styled-components";

const ErrorModal: FC = () => {
  return (
    <Container>
      <h3> En feil oppsto! </h3>
      <p> Vennligst logg ut, og prøv igjen</p>
    </Container>
  );
};

export default ErrorModal;

const Container = styled.div`
  text-align: center;
`;
