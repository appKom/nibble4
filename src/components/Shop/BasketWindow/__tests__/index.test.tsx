import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BasketWindow from "../index";
import { User } from "types/user";
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

const mockUser: User = {
  pk: 1337,
  balance: 1337,
  first_name: "SuperAdmin",
};

const mockCartItem: CartItem = createCartItem(95);

const mockStateWithUser: State = {
  user: mockUser,
  inventory: [],
  category: "Alt",
  cart: {},
  modalState: modalTypes.DISABLED,
};

const mockState: State = {
  user: mockUser,
  inventory: [mockProduct],
  category: "Alt",
  cart: { 95: mockCartItem },
  modalState: modalTypes.DISABLED,
};

const userContext: StateContextProps = {
  state: mockStateWithUser,
  dispatch: () => null,
};

const fullContext: StateContextProps = {
  state: mockState,
  dispatch: () => null,
};

afterEach(cleanup);

describe("Unit-testing for BasketWindow", () => {
  it("Should match snapshot", () => {
    const { asFragment } = render(
      <StateContext.Provider value={userContext}>
        <BasketWindow />
      </StateContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Integration test for BasketWindow with a BasketItem", () => {
  it("Should render with an BasketItem", () => {
    const { asFragment } = render(
      <StateContext.Provider value={fullContext}>
        <BasketWindow />
      </StateContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
