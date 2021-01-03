import React, { FC } from "react";
import styled from "styled-components";

const CompleteModal: FC = () => {
  return (
    <Container>
      <h3> An error concurred </h3>
      <p> Please log out, and try again!</p>
    </Container>
  );
};

export default CompleteModal;

const Container = styled.div`
  text-align: center;
`;
