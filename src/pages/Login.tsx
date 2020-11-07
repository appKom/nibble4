import React, { FC } from "react";
import Instructions from "components/Instructions";
import Scanner from "components/Scanner";
import styled from "styled-components";

const Login: FC = () => (
  <LoginStyle>
    <Scanner />
    <Instructions />
  </LoginStyle>
);

const LoginStyle = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export default Login;
