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

const PurchaseModal: FC = () => {
  return (
    <Container>
      <h3> Takk for kjøpet! </h3>
    </Container>
  );
};

export default PurchaseModal;

const Container = styled.div`
  text-align: center;
`;
