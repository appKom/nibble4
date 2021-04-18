import React, { ChangeEvent, FC, useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import InputField from "components/InputField";
import { cancelRegisterRoute } from "utility/routes";
import Button, { ButtonColors } from "components/Button";
import { handleRfid, registerUser } from "api/authorization";
import { StateContext } from "state/state";
import { setUser } from "state/actions";
import InfoBox, { InfoBoxTypes } from "./InfoBox";

type Props = {
  rfid: string;
};

const Register: FC<Props> = ({ rfid }: Props) => {
  const { dispatch } = useContext(StateContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [badCredentials, setBadCredentials] = useState(false);
  const [cancel, setCancel] = useState(false);

  const onUsernameChange = (event: ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const onRegister = async () => {
    const response = await registerUser(username, password, rfid);
    if (response.ok) {
      const user = await handleRfid(rfid);
      if (user) dispatch(setUser(user));
    } else {
      setBadCredentials(true);
    }
  };

  const onCancel = () => setCancel(true);

  if (cancel) return <Redirect to={cancelRegisterRoute} />;

  return (
    <Container>
      <h1>Registrer</h1>
      <InfoBox>
        <p>
          Registrer deg med ditt <span>online.ntnu.no</span> brukernavn og
          passord.
        </p>
      </InfoBox>
      {badCredentials ? (
        <InfoBox type={InfoBoxTypes.WARNING}>
          Du skrev inn feil brukernavn eller passord. Prøv igjen på nytt.
        </InfoBox>
      ) : null}
      <InputField
        inputLabel="Brukernavn"
        value={username}
        onChange={onUsernameChange}
      />
      <InputField
        inputLabel="Passord"
        value={password}
        onChange={onPasswordChange}
        type="password"
      />
      <div>
        <Button buttonColor={ButtonColors.RED} onClick={onCancel}>
          Tilbake
        </Button>
        <Button onClick={onRegister}>Registrer</Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  h1 {
    text-align: center;
  }
  div:last-child {
    display: flex;
    justify-content: space-between;
  }
  > * {
    margin: 0.5rem 0;
  }
`;

export default Register;
