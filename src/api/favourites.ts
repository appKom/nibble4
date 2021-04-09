import { Product } from "../types/inventory";
import { PreviousPurchaseResponse } from "../types/api";
import { authorizedGet, PREVIOUS_ORDERS_URI } from "./index";

export const fetchFavourites = async (pk: number): Promise<Product[]> => {
  const url = PREVIOUS_ORDERS_URI(pk);
  const response = await authorizedGet({ url });
  if (response.ok) {
    const json: PreviousPurchaseResponse[] = await response.json();
    return json
      .flatMap((previousPurchase) =>
        previousPurchase.orders.map((order) => order.content_object)
      )
      .filter((v, i, self) => self.indexOf(v) === i)
      .sort();
  }
  return [];
};

/*
SORT BY MOST OFTEN PURCHASED.
Doesn't work yet

.reduce((acc, current) => {
        if (acc.has(current.content_object)) {
          acc.set(
            current.content_object,
            acc.get(current.content_object) + current.quantity
          );
        } else {
          acc.set(current.content_object, current.quantity);
        }
      }, {} as Map<Product, number>)
// Sort after reduce and extract product

.reduce((acc, current) => {
        if (Object.keys(acc).includes(current.content_object.pk.toString())) {
          acc[current.content_object.pk.toString()];
        } else {
          acc[current.content_object.pk.toString()] = current.quantity;
        }
        return acc;
      }, [])
      .sort((p1, p2) => p1.quantity - p2.quantity)
      .map((p) => p.content_object);
*/
