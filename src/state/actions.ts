import { Product } from "types/inventory";
import { User } from "types/user";

export enum ActionTypes {
  SET_USER = "SET_USER",
  LOGOUT_USER = "LOGOUT_USER",
  SET_INVENTORY = "SET_INVENTORY",
}

type SetUserAction = { type: ActionTypes.SET_USER; payload: User };
type LogoutUserAction = { type: ActionTypes.LOGOUT_USER };
type SetInventoryAction = {
  type: ActionTypes.SET_INVENTORY;
  payload: Product[];
};
export type Action = SetUserAction | LogoutUserAction | SetInventoryAction;

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
