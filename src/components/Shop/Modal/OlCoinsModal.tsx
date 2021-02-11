import React, { FC, useContext } from "react";
import styled from "styled-components";
import ButtonBar from "../OlCoins/ButtonBar";
import Button from "../../../atoms/Button";
import { StateContext } from "state/state";
import {
  olCoinsRegister,
  olCoinsLogin,
  olCoinsTransaction,
  handleLogin,
} from "api/olcoins";
import { setOlCoinsUser } from "state/actions";
import { modalTypes } from "types/modal";
import { setModalState } from "state/actions";

const style1 = {
  gridColumn: 2,
  gridRow: 1,
};

const OlCoinsModal: FC = () => {
  const { state, dispatch } = useContext(StateContext);
  const { newOlCoins, olCoinsUser, user, modalState } = state;

  const addCoins = () => {
    olCoinsTransaction(olCoinsUser!.id, newOlCoins).then(() => {
      handleLogin(user!.pk).then((updatedUser) => {
        dispatch(setOlCoinsUser(updatedUser));
        dispatch(setModalState(modalTypes.OLCOINSCOMPLETE));
      });
    });
  };
  return (
    <Container>
      <h3 style={style1}> ØlCoins</h3>
      <ButtonBar signValue={1} />
      <ButtonBar signValue={0} />
      <div
        style={{
          gridColumn: 2,
          gridRow: 2,
        }}
      >
        {newOlCoins}
      </div>

      <Button
        style={{
          gridColumn: 2,
          gridRow: 3,
        }}
        onClick={addCoins}
      >
        Add
      </Button>
    </Container>
  );
};

export default OlCoinsModal;

const Container = styled.div`
  text-align: center;
  height: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;
