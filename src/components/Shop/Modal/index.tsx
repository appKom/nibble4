import React, { useContext, FC } from "react";
import styled from "styled-components";
import { StateContext } from "state/state";
import { BiArrowBack } from "react-icons/bi";
import { IconContext } from "react-icons";
import { setModal } from "state/actions";
import ReactDOM from "react-dom";
import { modalTypes } from "types/modal";
import PurchaseModal from "./PurchaseModal";
import CompleteModal from "./CompleteModal";

type modalProps = {
  type: modalTypes;
};

const Modal: FC<modalProps> = ({ type }: modalProps) => {
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

      {type == modalTypes.PURCHASE ? <PurchaseModal /> : null}
      {type == modalTypes.COMPLETE ? <CompleteModal /> : null}
    </Container>,
    document.getElementById("root")!
  );
};

export default Modal;

const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;

  width: 400px;
  height: 400px;

  margin: auto;
  margin-top: 10%;
  border-radius: 25px;
  background: white;
  box-shadow: 2px 2px 7px #888888;
`;
