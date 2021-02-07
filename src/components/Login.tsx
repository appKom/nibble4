import { handleRfid } from "api/authorization";
import React, {
  ChangeEvent,
  FC,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { setUser, setOlCoinsUser } from "state/actions";
import { StateContext } from "state/state";
import { registerCardRoute } from "utility/routes";
import { handleLogin } from "api/olcoins";

const Login: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { dispatch } = useContext(StateContext);
  const [registerCard, setRegisterCard] = useState(false);
  const [rfid, setRfid] = useState<string>("");

  const focusInput = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  useEffect(() => {
    window.addEventListener("keydown", focusInput);
    return () => {
      window.removeEventListener("keydown", focusInput);
    };
  }, [inputRef]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.trim()) setRfid(value);
  };

  const onKeyUp = async () => {
    if (!rfid.trim()) return;
    const user = await handleRfid(rfid);
    if (user) {
      dispatch(setUser(user));
      const olCoinsUser = await handleLogin(user.pk);
      dispatch(setOlCoinsUser(olCoinsUser));
    } else setRegisterCard(true);
  };

  if (registerCard) return <Redirect to={registerCardRoute(rfid)} />;

  return (
    <HiddenInput
      type="text"
      ref={inputRef}
      value={rfid}
      onChange={onChange}
      onKeyUp={onKeyUp}
    />
  );
};

const HiddenInput = styled.input`
  display: block;
  transform: scale(0);
`;

export default Login;
