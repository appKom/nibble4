import React, { FC, useContext, useEffect, useState } from "react";
import { modalTypes } from "types/modal";
import { StateContext } from "state/state";
import styled from "styled-components";
import { logoutUser } from "state/actions";

const InactiveModal: FC = () => {
  const { state, dispatch } = useContext(StateContext);
  const { modalState } = state;
  const [seconds, decrementSeconds] = useState(10);

  if (seconds <= 0) {
    dispatch(logoutUser());
  }

  useEffect(() => {
    setInterval(() => {
      if (modalState == modalTypes.INACTIVE)
        decrementSeconds((seconds) => seconds - 1);
    }, 1000);
  }, []);

  return (
    <Container>
      <h3> Du har vært inaktiv for lenge!</h3>
      <p> Logger ut om {seconds} sekunder </p>
    </Container>
  );
};

export default InactiveModal;
const Container = styled.div`
  text-align: center;
`;
