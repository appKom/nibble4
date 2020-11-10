import React, { ChangeEvent, FC, useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import InputField from "atoms/InputField";
import { cancelRegisterRoute } from "utility/routes";
import Button, { ButtonColors } from "atoms/Button";

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
    <Container>
      <h1>Registrer</h1>
      <InputField value={username} onChange={onUsernameChange} />
      <InputField
        value={password}
        onChange={onPasswordChange}
        type="password"
      />
      <Button>Registrer</Button>
      <Button buttonColor={ButtonColors.RED} onClick={() => setCancel(true)}>
        Tilbake
      </Button>
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  h1 {
    text-align: center;
  }
`;

export default Register;
