import React, { FC, useContext, useEffect, useState } from "react";
import { StateContext } from "state/state";
import styled from "styled-components";
import { logoutUser } from "state/actions";
import { setModal } from "state/actions";
import { setPurchaseComplete } from "state/actions";

const CompleteModal: FC = () => {
  const { state, dispatch } = useContext(StateContext);
  const { purchaseComplete } = state;
  const [seconds, decrementSeconds] = useState(3);

  if (seconds <= 0) {
    dispatch(setModal(false));
    dispatch(setPurchaseComplete(false));
    dispatch(logoutUser());
    //clearInterval(interval);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (purchaseComplete) decrementSeconds((seconds) => seconds - 1);
    }, 1000);
  }, []);

  return (
    <Container>
      <h3> Purchase Complete!</h3>
      <img
        src={`${process.env.PUBLIC_URL}/images/complete.gif`}
        alt="description of gif"
      />
      <p> Logging out in {seconds} seconds </p>
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
