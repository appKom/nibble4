import { Product } from "types/inventory";
import { User } from "types/user";
import { modalTypes } from "types/modal";

export enum ActionTypes {
  SET_USER = "SET_USER",
  LOGOUT_USER = "LOGOUT_USER",
  SET_INVENTORY = "SET_INVENTORY",
  SET_FAVOURITES = "SET_FAVOURITES",
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  EMPTY_CART = "EMPTY_CART",
  SET_CATEGORY = "SET_CATEGORY",
  SET_MODAL_STATE = "SET_MODAL_STATE",
}

type SetUserAction = { type: ActionTypes.SET_USER; payload: User };
type LogoutUserAction = { type: ActionTypes.LOGOUT_USER };
type SetInventoryAction = {
  type: ActionTypes.SET_INVENTORY;
  payload: Product[];
};

type SetFavouritesAction = {
  type: ActionTypes.SET_FAVOURITES;
  payload: Product[];
};

type SetCategoryAction = {
  type: ActionTypes.SET_CATEGORY;
  payload: string;
};
type AddToCartAction = {
  type: ActionTypes.ADD_TO_CART;
  payload: number;
};
type RemoveFromCartAction = {
  type: ActionTypes.REMOVE_FROM_CART;
  payload: number;
};

type EmptyCartAction = {
  type: ActionTypes.EMPTY_CART;
};

type SetModalState = {
  type: ActionTypes.SET_MODAL_STATE;
  payload: modalTypes;
};

export type Action =
  | SetUserAction
  | LogoutUserAction
  | SetInventoryAction
  | SetFavouritesAction
  | SetCategoryAction
  | AddToCartAction
  | RemoveFromCartAction
  | EmptyCartAction
  | SetModalState;

export const setUser = (user: User): SetUserAction => ({
  type: ActionTypes.SET_USER,
  payload: user,
});
export const logoutUser = (): LogoutUserAction => ({
  type: ActionTypes.LOGOUT_USER,
});
export const setInventory = (inventory: Product[]): SetInventoryAction => ({
  type: ActionTypes.SET_INVENTORY,
  payload: inventory,
});

export const setFavourites = (favourites: Product[]): SetFavouritesAction => ({
  type: ActionTypes.SET_FAVOURITES,
  payload: favourites,
});

export const addToCart = (id: number): AddToCartAction => ({
  type: ActionTypes.ADD_TO_CART,
  payload: id,
});
export const removeFromCart = (id: number): RemoveFromCartAction => ({
  type: ActionTypes.REMOVE_FROM_CART,
  payload: id,
});
export const emptyCart = (): EmptyCartAction => ({
  type: ActionTypes.EMPTY_CART,
});

export const setCategory = (id: string): SetCategoryAction => ({
  type: ActionTypes.SET_CATEGORY,
  payload: id,
});

export const setModalState = (modalType: modalTypes): SetModalState => ({
  type: ActionTypes.SET_MODAL_STATE,
  payload: modalType,
});
