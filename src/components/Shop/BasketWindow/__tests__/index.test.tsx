import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BasketWindow from "../index";
import { User } from "types/user";
import {
  StateProvider,
  StateContext,
  State,
  StateContextProps,
} from "state/state";
import { CartItem } from "types/inventory";
import { modalTypes } from "types/modal";

const mockUser: User = {
  pk: 1337,
  balance: 1337,
  first_name: "SuperAdmin",
};

const mockCartItem: Cart = {
  object_id: 32,
  quantity: 1,
};

const mockState: State = {
  user: mockUser,
  inventory: [],
  category: "Alt",
  cart: {},
  modalState: modalTypes.DISABLED,
};

const initialContext: StateContextProps = {
  state: mockState,
  dispatch: () => null,
};

afterEach(cleanup);
it("renders", () => {
  const { asFragment } = render(
    <StateContext.Provider value={initialContext}>
      <BasketWindow />
    </StateContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
