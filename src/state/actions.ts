import { Product } from "types/inventory";
import { User } from "types/user";

export enum ActionTypes {
  SET_USER = "SET_USER",
  LOGOUT_USER = "LOGOUT_USER",
  SET_INVENTORY = "SET_INVENTORY",
}

export type Action =
  | {
      type: ActionTypes.SET_USER;
      payload: User;
    }
  | {
      type: ActionTypes.LOGOUT_USER;
    }
  | {
      type: ActionTypes.SET_INVENTORY;
      payload: Product[];
    };
