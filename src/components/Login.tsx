import { handleRfid } from "api/authorization";
import InputField from "atoms/InputField";
import React, { ChangeEvent, FC, useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { setUser } from "state/actions";
import { StateContext } from "state/state";

const Login: FC = () => {
  const { dispatch } = useContext(StateContext);
  const [registerCard, setRegisterCard] = useState(false);
  const [rfid, setRfid] = useState<string>("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setRfid(event.target.value);
  const onKeyUp = async () => {
    const user = await handleRfid(rfid);
    if (user) dispatch(setUser(user));
    else setRegisterCard(true);
  };

  if (registerCard) {
    return <Redirect to={{ pathname: "/", state: { register: true } }} />;
  }
  return <InputField value={rfid} onChange={onChange} onKeyUp={onKeyUp} />;
};

export default Login;
