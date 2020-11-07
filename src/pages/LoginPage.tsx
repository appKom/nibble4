import React, { FC, useContext } from "react";
import Instructions from "components/Instructions";
import Scanner from "components/Scanner";
import styled from "styled-components";
import Card from "atoms/Card";
import Register from "components/Register";
import { Redirect, useLocation } from "react-router-dom";
import { StateContext } from "state/state";

type RegisterLocation = {
  register: boolean;
};

const CardReader: FC = () => {
  const location = useLocation<RegisterLocation>();
  if (location.state.register) {
    return <Register />;
  }
  return <Scanner />;
};

const LoginPage: FC = () => {
  const { state } = useContext(StateContext);
  if (state.user) return <Redirect to="/shop" />;
  return (
    <LoginStyle>
      <Card>
        <CardReader />
      </Card>
      <Instructions />
    </LoginStyle>
  );
};

const LoginStyle = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export default LoginPage;
