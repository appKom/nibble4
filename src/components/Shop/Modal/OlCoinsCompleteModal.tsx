import React, { FC, useContext, useEffect, useState } from "react";
import { modalTypes } from "types/modal";
import { StateContext } from "state/state";
import styled from "styled-components";

const OlCoinsCompleteModal: FC = () => {
  const { state, dispatch } = useContext(StateContext);
  const { modalState, newOlCoins } = state;

  return (
    <Container>
      <h3> Du har lagt til {newOlCoins}øc!</h3>
      <img
        src={`${process.env.PUBLIC_URL}/images/complete.gif`}
        alt="Handel gjennomført gif"
      />
      <p> Du kan nå lukke dette vinduet. </p>
    </Container>
  );
};

export default OlCoinsCompleteModal;

const Container = styled.div`
  text-align: center;

  img {
    width: 80%;
  }
`;
