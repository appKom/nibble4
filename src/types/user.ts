import { Product } from "./inventory";

export type User = {
  pk: number;
  balance: number;
  first_name: string;
  favourites: Product[];
};
