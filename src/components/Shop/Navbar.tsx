import React, { FC, useContext } from "react";
import { StateContext } from "state/state";
import styled from "styled-components";
import { OnlineBlue } from "utility/style";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import { IoIosBeer } from "react-icons/io";
import { IconContext } from "react-icons";
import { logoutUser } from "state/actions";
const Navbar: FC = () => {
  const { state, dispatch } = useContext(StateContext);
  const { user } = state;

  return (
    <Container>
      <img
        src={`${process.env.PUBLIC_URL}/images/logo.png`}
        alt="Online logo"
      />
      <div>
        <IconContext.Provider value={{ color: "white", size: "20px" }}>
          <span>
            {user!.first_name} | <GiWallet /> {user!.balance}kr
          </span>
        </IconContext.Provider>
      </div>
      <IconContext.Provider value={{ color: "white", size: "40px" }}>
        <RiLogoutBoxRLine
          onClick={() => {
            dispatch(logoutUser());
          }}
        />
      </IconContext.Provider>
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
  * {
    margin: auto 0;
  }
  img {
    width: 50%;
  }
  > svg {
    margin-right: 0;
    margin-left: auto;
  }
`;
