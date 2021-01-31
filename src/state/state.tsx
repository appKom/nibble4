import React, { createContext, Dispatch, ReactNode, useReducer } from "react";
import {
  Product,
  CartItem,
  incrementCartItem,
  createCartItem,
  decrementCartItem,
} from "types/inventory";
import { User, OlCoinsUser } from "types/user";
import { modalTypes } from "types/modal";
import { Action, ActionTypes } from "state/actions";

type State = {
  user?: User;
  olCoinsUser?: OlCoinsUser;
  inventory: Product[];
  category: string;
  cart: { [id: number]: CartItem };
  modalState: modalTypes;
  newOlCoins: number;
};

const initialState: State = {
  olCoinsUser: { balance: 100 },
  inventory: [],
  category: "Alt",
  cart: {},
  modalState: modalTypes.DISABLED,
  newOlCoins: 0,
};

const getIncrementedCartItem = (id: number, state: State): CartItem => {
  if (state.cart[id]) {
    return incrementCartItem(state.cart[id]);
  }
  return createCartItem(id);
};

const getDecrementedCart = (id: number, state: State) => {
  if (state.cart[id].quantity > 1) {
    return { ...state.cart, [id]: decrementCartItem(state.cart[id]) };
  }
  const removedCart = { ...state.cart };
  delete removedCart[id];
  return { ...removedCart };
};

const updateNewOlCoins = (newValue: number, state: State) => {
  return state.newOlCoins + newValue;
};

const StateReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return { ...state, user: action.payload };
    case ActionTypes.LOGOUT_USER:
      return {
        ...state,
        user: undefined,
        cart: {},
        category: "Alt",
        modalState: modalTypes.DISABLED,
      };
    case ActionTypes.SET_INVENTORY:
      return { ...state, inventory: action.payload };
    case ActionTypes.SET_CATEGORY:
      return { ...state, category: action.payload };
    case ActionTypes.SET_MODAL_STATE:
      return { ...state, modalState: action.payload };
    case ActionTypes.CHANGE_NEWOLCOINS:
      return {
        ...state,
        newOlCoins: updateNewOlCoins(action.payload, state),
      };
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload]: getIncrementedCartItem(action.payload, state),
        },
      };
    case ActionTypes.REMOVE_FROM_CART: {
      return {
        ...state,
        cart: getDecrementedCart(action.payload, state),
      };
    }
    case ActionTypes.EMPTY_CART:
      return { ...state, cart: {} };
    default:
      return { ...state };
  }
};

type StateContextProps = {
  state: State;
  dispatch: Dispatch<Action>;
};

const initialContext: StateContextProps = {
  state: initialState,
  dispatch: () => null,
};

export const StateContext = createContext<StateContextProps>(initialContext);

type StateProviderProps = {
  children: ReactNode;
};

export const StateProvider = (props: StateProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(StateReducer, initialState);
  const { children } = props;

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};
