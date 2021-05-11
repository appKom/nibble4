import React, { FC } from "react";
import styled from "styled-components";

const FailureModal: FC = () => {
  return (
    <Container>
      <h3> Det ser ut til at OW er nede! </h3>
      <p>
        Nibble4 er avhengig av at dotkom sine systemer er oppe å kjører. Gjerne
        meld fra i @support kanalen i slack, eller send en mail til
        appkom@online.ntnu.no
      </p>
      <p>
        Hvis du tror dette er en feil, gjerne trykk på den gule pilen og skann
        kortet ditt på nytt
      </p>
    </Container>
  );
};

export default FailureModal;

const Container = styled.div`
  text-align: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;
