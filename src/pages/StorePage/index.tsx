import React, { FC, useContext } from "react";
import { Redirect } from "react-router-dom";
import { StateContext } from "state/state";
import styled from "styled-components";
import TitleBar from "./TitleBar";
import CategoryBar from "./CategoryBar";
import Shop from "./Shop";
import { initialRoute } from "utility/routes";

const StorePage: FC = () => {
  const { state } = useContext(StateContext);
  if (!state.user) return <Redirect to={initialRoute} />;
  return (
    <Container>
      <TitleBar />
      <CategoryBar />
      <Shop />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
`;

export default StorePage;
