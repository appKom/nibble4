import React, { createContext, Dispatch, ReactNode, useReducer } from "react";
import { Product } from "types/inventory";
import { User } from "types/user";
import { Action, ActionTypes } from "state/actions";

type State = {
  user?: User;
  inventory: Product[];
};

const initialState: State = {
  inventory: [],
};

// const getIncrementedCartItem = (id: number, state: GlobalState): CartItem => {
//     if (state.cart[id]) {
//         return incrementCartItem(state.cart[id]);
//     }
//     return createCartItem(id);
// };

// const getDecrementedCart = (id: number, state: GlobalState) => {
//     if (state.cart[id].quantity > 1) {
//         return { ...state.cart, [id]: decrementCartItem(state.cart[id]) };
//     }
//     const removedCart = { ...state.cart };
//     delete removedCart[id];
//     return { ...removedCart };
// };

const StateReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return { ...state, user: action.payload };
    case ActionTypes.LOGOUT_USER:
      return { ...state, user: undefined };
    case ActionTypes.SET_INVENTORY:
      return { ...state, inventory: action.payload };
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
