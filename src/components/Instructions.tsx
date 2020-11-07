import React, { FC } from "react";
import styled from "styled-components";
import Card from "atoms/Card";
import { OnlineBlue } from "utility/style";

const Instructions: FC = () => (
  <Card>
    <Container>
      <h1>Har du ikke bruker?</h1>
      <p>
        For å bruke Online sitt kiosksystem, Nibble, så må man ha registrert
        sitt NTNU-adgangskort på sin Online-bruker. Har du ikke bruker? Følg
        stegene beskrevet nedenfor.
      </p>
      <ol>
        <li>Scan ditt NTNU brukerkort på venstre side</li>
        <li>
          Logg inn med din <span>online.ntnu.no</span> innloggingsinformasjon.
        </li>
        <ul>
          <li>Du må snu maskinen og bruke maskinens tastatur </li>
        </ul>
        <li>
          Kortet ditt vil nå være registrert på din bruker, og du kan nå logge
          inn på Nibble. Du kan se dette under ‘min side’ på{" "}
          <span>online.ntnu.no/profile</span>
        </li>
        <li>
          For å legge til NOK på brukeren din må du inn på{" "}
          <span>online.ntnu.no/payments/wallet</span>. Den siden kan du også
          finne ved din å trykke på saldo’ fra nedtrekksmenyen ved å trykke på
          profilen din på <span>online.ntnu.no</span>
        </li>
      </ol>
    </Container>
  </Card>
);

const Container = styled.div`
  margin: auto;
  h1 {
    text-align: center;
  }
  span {
    color: ${OnlineBlue};
    text-decoration: underline;
  }
  p:first-of-type {
    padding: 1rem 3rem;
    color: #5d6455;
  }
  ol {
    li {
      margin-top: 1rem;
    }
  }
`;

export default Instructions;
