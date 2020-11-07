import React, { FC } from "react";
import styled from "styled-components";
import Login from "components/Login";

const Scanner: FC = () => (
  <ScannerStyle>
    <h1>Logg inn</h1>
    <Login />
    <img src="images/rfid.png" alt="RFID icon" />
  </ScannerStyle>
);

const ScannerStyle = styled.div`
  margin: auto;
  h1 {
    text-align: center;
  }
  img {
    transform: scale(70%);
  }
`;

export default Scanner;
