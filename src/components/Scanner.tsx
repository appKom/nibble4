import React, { FC } from "react";
import styled from "styled-components";
import Login from "components/Login";

const Scanner: FC = () => (
  <Container>
    <h1>Logg inn</h1>
    <Login />
    <img src="images/rfid.png" alt="RFID icon" />
  </Container>
);

const Container = styled.div`
  margin: auto;
  h1 {
    text-align: center;
  }
  img {
    margin: auto;
    transform: scale(50%);
    max-width: 350px;
    display: flex;
  }
`;

export default Scanner;
