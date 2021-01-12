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
  const { modalState, user } = state;
/*
  if (seconds <= 0) {
    dispatch(setModalState(modalTypes.DISABLED));
    dispatch(emptyCart());
    dispatch(setCategory("Alt"));
    dispatch(logoutUser());
  }

*/
  return (
    <Container>
      <h3> Du har vært inaktiv for lenge!</h3>
      <p> Logger ut om sekunder sekunder </p>
    </Container>
  );
};

export default CompleteModal;

const Container = styled.div`
  text-align: center;
`;
