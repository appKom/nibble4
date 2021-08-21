import React, { FC } from "react";
import { PacmanLoader } from "react-spinners";
import styled from "styled-components";
import { OnlineOrange } from "utility/style";

const LoadingModal: FC = () => {
  const loading = true;
  return (
    <Container>
      <h1>Loading...</h1>
      <PacmanLoader
        color={OnlineOrange}
        loading={loading}
        size={80}
        css={"display: block; margin: auto 0;"}
      />
    </Container>
  );
};

export default LoadingModal;

const Container = styled.div`
  text-align: center;
`;
