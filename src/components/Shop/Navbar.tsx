import React, { FC } from "react";
import styled from "styled-components";

const Navbar: FC = () => {
  return (
    <Container>
      <div>
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="RFID scan here" />
      </div>
    </Container>
  );
};

export default styled(Navbar)``;

const Container = styled.div`
  background-color: #0d5474;
  color: white;

  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 10px;

  img {
    width: 70%;
  }
`;
