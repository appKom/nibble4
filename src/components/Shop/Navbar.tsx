import React, { FC } from "react";
import styled from "styled-components";

const Navbar: FC = () => {
  return (
    <Container>
      <div>
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="RFID scan here" />
      </div>
      <div>
        <span>Ola Nordmann | (icon) xxxkr - xxx Ølcoins (icon)</span>
      </div>
      <div>(icon)</div>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  background-color: #0d5474;
  color: white;
  text-align: left;
  display: grid;
  grid-template-columns: 2fr 4fr 1fr;
  padding: 10px;

  img {
    width: 70%;
  }
`;
