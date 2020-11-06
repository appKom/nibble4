import React, { FC } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import ShopWindow from "./ShopWindow";

const Shop: FC = () => {
  return (
    <div>
      <Navbar />
      <ShopWindow />
    </div>
  );
};

export default styled(Shop)``;
