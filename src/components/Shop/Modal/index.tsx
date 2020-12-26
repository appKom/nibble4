import React, { useContext, FC } from "react";
import styled from "styled-components";
import { StateContext } from "state/state";
import { calculateCartTotal } from "types/inventory";
import { OffWhite } from "utility/style";
import { BiArrowBack } from "react-icons/bi";
import { IconContext } from "react-icons";
import { setModal } from "state/actions";
import Button from "../../../atoms/Button";
import purchaseItems from "api/order";
import ReactDOM from "react-dom";

const styledButton = {
  gridColumn: 2,
  gridRow: 3,
  width: "80%",
  height: "85%",
  outline: "none",
  marginLeft: "auto",
  marginRight: "auto",
};

type modalProps = {
  title: string;
};

const Modal: FC<modalProps> = ({ title }: modalProps) => {
  const { state, dispatch } = useContext(StateContext);
  const { modalActive } = state;

  const HideModal = () => dispatch(setModal(false));

  return ReactDOM.createPortal(
    <Container style={{ zIndex: modalActive ? 1 : -1 }}>
      <div onClick={HideModal}>
        <IconContext.Provider value={{ color: "orange", size: "50px" }}>
          <BiArrowBack />
        </IconContext.Provider>
      </div>
      <div>
        <h3> {title} </h3>
      </div>
    </Container>,
    document.getElementById("root")!
  );
};

export default Modal;

const Container = styled.div`
  position: absolute;

  width: 400px;
  height: 300px;

  left: 0;
  right: 0;
  margin: auto;
  margin-top: 10%;

  border-radius: 25px;
  background: white;
  display: grid;
  grid-template-rows: 2fr 3fr 1fr;
  grid-template-columns: 1fr 2fr 1fr;

  text-align: center;
`;

const TotalDiv = styled.div`
  display: grid;

  width: 100%;
  height: 60%;

  background-color: ${OffWhite};
  margin-left: auto;
  margin-right: auto;
  border-radius: 2px;

  grid-column: 2;
  grid-row: 2;
  hr {
    width: 100%;
    overflow: hidden;
    border-top: 1px dashed #aeb2a8;
    height: 0px;
  }
`;
