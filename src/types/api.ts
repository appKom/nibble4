import { CartItem } from "./inventory";

export interface UserResponse {
  count: number;
  results: Array<{
    pk: number;
    first_name: string;
    last_name: string;
    saldo: number;
  }>;
}

export type OrderLineFormat = {
  user: number;
  orders: CartItem[];
};
