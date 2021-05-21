import { CartItem, Product } from "./inventory";

export interface UserResponse {
  count: number;
  results: Array<{
    pk: number;
    first_name: string;
    last_name: string;
    saldo: number;
  }>;
}

export type OrderResponse = {
  price: number;
  quantity: number;
  content_object: Product;
};

export interface PreviousPurchaseResponse {
  orders: OrderResponse[];
  paid: boolean;
  datetime: string;
}

export type OrderLineFormat = {
  user: number;
  orders: CartItem[];
};
