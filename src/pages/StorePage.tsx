import React, { FC, useContext } from "react";
import { StateContext } from "state/state";
import Shop from "components/Shop";
import { Redirect } from "react-router-dom";

const StorePage: FC = () => {
  const { state } = useContext(StateContext);
  if (!state.user) return <Redirect to={{ pathname: "" }} />;
  return <Shop />;
};

export default StorePage;
