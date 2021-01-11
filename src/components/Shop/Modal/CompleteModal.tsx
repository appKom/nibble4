import React, { FC, useContext, useEffect, useState } from "react";
import { modalTypes } from "types/modal";
import { StateContext } from "state/state";
import styled from "styled-components";
import {
  emptyCart,
  logoutUser,
  setCategory,
  setModalState,
} from "state/actions";

const CompleteModal: FC = () => {
  const { state, dispatch } = useContext(StateContext);
  const { modalState } = state;
  const [seconds, decrementSeconds] = useState(3);

  if (seconds <= 0) {
    dispatch(setModalState(modalTypes.DISABLED));
    dispatch(emptyCart());
    dispatch(setCategory("Alt"));
    dispatch(logoutUser());
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (modalState == modalTypes.COMPLETE)
        decrementSeconds((seconds) => seconds - 1);
    }, 1000);
  }, []);

  return (
    <Container>
      <h3> Handel gjennomført!</h3>
      <img
        src={`${process.env.PUBLIC_URL}/images/complete.gif`}
        alt="description of gif"
      />
      <p> Logger ut om {seconds} sekunder </p>
    </Container>
  );
};

export default CompleteModal;

const Container = styled.div`
  text-align: center;

  img {
    width: 80%;
  }
`;
