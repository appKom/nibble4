// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { CartItem, createCartItem } from "types/inventory";
import { modalTypes } from "types/modal";
import { Product } from "types/inventory";
import { User } from "types/user";

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

const emptyState: State = {
  user: null,
  inventory: [],
  category: "Alt",
  cart: {},
  modalState: modalTypes.DISABLED,
};

export const userContext: StateContextProps = {
  state: mockStateWithUser,
  dispatch: () => null,
};

export const fullContext: StateContextProps = {
  state: mockState,
  dispatch: () => null,
};

export const emptyContext: StateContextProps = {
  state: emptyState,
  dispatch: () => null,
};
