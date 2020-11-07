import React, { FC, useContext } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { StateContext } from "state/state";
import Navbar from "components/Shop/Navbar";
import Window from "components/Shop/Window";

const StorePage: FC = () => {
  const { state } = useContext(StateContext);
  if (!state.user) return <Redirect to={{ pathname: "" }} />;
  return (
    <Container>
      <Navbar />
      <Window />
    </Container>
  );
};

const Container = styled.div``;

export default StorePage;
