import React, { FC, useContext } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { StateContext } from "state/state";
import { initialRoute } from "utility/routes";
import Navbar from "components/Shop/Navbar";
import Window from "components/Shop/Window";
import CategoryBar from "components/Shop/CategoryBar";

const StorePage: FC = () => {
  const { state } = useContext(StateContext);
  if (!state.user) return <Redirect to={initialRoute} />;
  return (
    <Container>
      <Navbar />
      <CategoryBar />
      <Window />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
`;

export default StorePage;
