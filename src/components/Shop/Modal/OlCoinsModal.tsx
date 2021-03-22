import React, { FC, useContext } from "react";
import styled from "styled-components";
import ButtonBar from "../OlCoins/ButtonBar";
import Button from "../../../atoms/Button";
import { StateContext } from "state/state";
import { olCoinsTransaction, handleLogin } from "api/olcoins";
import { setOlCoinsUser } from "state/actions";
import { modalTypes } from "types/modal";
import { setModalState } from "state/actions";

const style1 = {
  gridColumn: 2,
  gridRow: 1,
};

const OlCoinsModal: FC = () => {
  const { state, dispatch } = useContext(StateContext);
  const { newOlCoins, olCoinsUser, user } = state;

  const addCoins = () => {
    if (newOlCoins > 0) {
      olCoinsTransaction(olCoinsUser!.id, newOlCoins)
        .then(() => {
          handleLogin(user!.pk)
            .then((updatedUser) => {
              dispatch(setOlCoinsUser(updatedUser));
              dispatch(setModalState(modalTypes.OLCOINSCOMPLETE));
            })
            .catch(() => dispatch(setModalState(modalTypes.ERROR)));
        })
        .catch(() => dispatch(setModalState(modalTypes.ERROR)));
    }
  };

  return (
    <Container>
      <h3 style={style1}> ØlCoins</h3>
      <ButtonBar signValue={1} />
      <ButtonBar signValue={0} />
      <DisplayContainer>
        <span>
          <b> {newOlCoins} </b>øc
        </span>
      </DisplayContainer>

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

const DisplayContainer = styled.div`
  grid-column: 2;
  grid-row: 2;
  border-top: 3px solid orange;
  box-shadow: 2px 2px 7px #888888;

  height: 75%;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;
