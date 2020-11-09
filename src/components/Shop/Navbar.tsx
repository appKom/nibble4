import React, { useContext, FC } from "react";
import styled from "styled-components";
import { OnlineBlue } from "utility/style";
import { StateContext } from "state/state";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import { IoIosBeer } from "react-icons/io";
import { IconContext } from "react-icons";

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
        <IconContext.Provider value={{ color: "white", size: "20px" }}>
          {user ? (
            <span>
              {user.first_name} | <GiWallet /> {user.balance}kr - 0 Ølcoins
              <IoIosBeer />
            </span>
          ) : (
            ""
          )}
        </IconContext.Provider>
      </div>
      <IconContext.Provider value={{ color: "black", size: "40px" }}>
        <div>
          <RiLogoutBoxRLine />
        </div>
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
  grid-template-columns: 2fr 4fr 1fr;
  padding: 10px;

  img {
    width: 70%;
  }
`;
