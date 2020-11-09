import React, { useContext, FC } from "react";
import styled from "styled-components";
import { OnlineBlue } from "utility/style";
import { StateContext } from "state/state";

const Navbar: FC = () => {
  const { state, dispatch } = useContext(StateContext);
  const { user } = state;

  return (
    <Container>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          alt="RFID scan here"
        />
      </div>
      <div>
        {user ? (
          <span>
            {user.first_name} | (icon) {user.balance}kr - 0 Ølcoins (icon)
          </span>
        ) : (
          ""
        )}
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
  grid-template-columns: 2fr 4fr 1fr;
  padding: 10px;

  img {
    width: 70%;
  }
`;
