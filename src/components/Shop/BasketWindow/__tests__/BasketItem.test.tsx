import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BasketItem from "../BasketItem";
import { StateContext, State, StateContextProps } from "state/state";
import { CartItem, createCartItem } from "types/inventory";
import { modalTypes } from "types/modal";
import { Product } from "types/inventory";

const mockProduct: Product = {
  pk: 95,
  name: "Powerking",
  description: "Energidrikk",
  price: 10,
  image: {
    sm: "/media/images/responsive/sm/38688f77-21b6-4936-8ba6-c976538fb110.png",
  },
  category: {
    pk: 3,
    name: "Drikke",
  },
};

const mockCartItem: CartItem = createCartItem(95);

const mockState: State = {
  inventory: [mockProduct],
  category: "Alt",
  cart: { 95: mockCartItem },
  modalState: modalTypes.DISABLED,
};

const fullContext: StateContextProps = {
  state: mockState,
  dispatch: () => null,
};

afterEach(cleanup);

it("Should match snapshot", () => {
  const { asFragment } = render(
    <StateContext.Provider value={fullContext}>
      <BasketItem id={95} quantity={95} />
    </StateContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
