import React, { ChangeEvent, FC, useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import InputField from "atoms/InputField";
import { cancelRegisterRoute } from "utility/routes";

const Register: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cancel, setCancel] = useState(false);

  const onUsernameChange = (event: ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);
  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  if (cancel) return <Redirect to={cancelRegisterRoute} />;

  return (
    <RegisterStyle>
      <h1>Registrer</h1>
      <InputField value={username} onChange={onUsernameChange} />
      <InputField value={password} onChange={onPasswordChange} password />
      <button>Registrer</button>
      <button onClick={() => setCancel(true)}>Tilbake</button>
    </RegisterStyle>
  );
};

const RegisterStyle = styled.div`
  margin: auto;
  h1 {
    text-align: center;
  }
`;

export default Register;
