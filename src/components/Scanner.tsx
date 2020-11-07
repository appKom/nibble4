import React, { FC } from "react";
import Card from "atoms/Card";
import styled from "styled-components";

const Scanner: FC = () => (
  <Card>
    <ScannerStyle>
      <h1>Logg inn</h1>
      <img src="images/rfid.png" alt="RFID icon" />
    </ScannerStyle>
  </Card>
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
