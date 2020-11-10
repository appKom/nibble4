import React, { FC, useContext } from "react";
import { Redirect, useLocation } from "react-router-dom";
import styled from "styled-components";
import Card from "atoms/Card";
import Instructions from "components/Instructions";
import Scanner from "components/Scanner";
import Register from "components/Register";
import { StateContext } from "state/state";
import { shopRoute } from "utility/routes";

type RegisterLocation = {
  register?: boolean;
  rfid?: string;
};

const CardReader: FC = () => {
  const { state } = useLocation<RegisterLocation>();
  if (state?.register && state?.rfid) {
    return <Register rfid={state.rfid} />;
  }
  return <Scanner />;
};

const LoginPage: FC = () => {
  const { state } = useContext(StateContext);
  if (state.user) return <Redirect to={shopRoute} />;
  return (
    <Container>
      <Card>
        <CardReader />
      </Card>
      <Instructions />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export default LoginPage;
