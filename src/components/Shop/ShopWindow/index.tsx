import React, { useContext, FC } from "react";
import styled from "styled-components";
import ShopItem from "./ShopItem";
import { OnlineOrange, OffWhite } from "utility/style";
import { StateContext } from "state/state";
import { addToCart } from "state/actions";

const ShopWindow: FC = () => {
  const { state, dispatch } = useContext(StateContext);

  const addItem = (id: number) => dispatch(addToCart(id));

  const shopItems = state.inventory.map((item) => {
    if (item.category.name === state.category || state.category === "Alt")
      return <ShopItem key={item.pk} product={item} addItem={addItem} />;
  });

  return <Container>{shopItems}</Container>;
};

export default ShopWindow;

const Container = styled.div`
  background-color: ${OffWhite};
  width: 95%;
  margin-left: auto;
  margin-right: auto;

  display: grid;
  /* The height for the shop items need to be set, as overflow needs a specific height in some value.
  100% becomes 100vh for some reason. The height is therefore the whole viewable screen (100vh),
  minus the height from the navbar (30px) + its padding (20px), minus the height from the category bar (30px)
  30px from Navbar height, and minus 0.5 rem as the padding around the store container */
  height: calc(100vh - 30px - 30px - 20px - 20px - 0.5rem);
  grid-template-columns: repeat(3, 1fr);
  overflow-x: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${OnlineOrange};
    border-radius: 2px;
  }
`;
