import React, { FC, useContext } from "react";
import { StateContext } from "state/state";
import styled from "styled-components";
import { OnlineBlue } from "utility/style";

const Navbar: FC = () => {
  const { state } = useContext(StateContext);
  return (
    <Container>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          alt="Online logo"
        />
      </div>
      <div>
        <span>
          {state.user?.first_name} | (icon) {state.user?.balance}kr - xxx
          Øl-Coins (icon)
        </span>
      </div>
      <div>(icon)</div>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  background-color: ${OnlineBlue};
  color: white;
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  padding: 10px;

  img {
    width: 50%;
  }
  div:nth-child(2) {
    margin: auto 0;
  }
  div:last-child {
    margin: auto 0 auto auto;
  }
`;
