import { OrderResponse, PreviousPurchaseResponse } from "types/api";
import { authorizedGet, PREVIOUS_ORDERS_URI } from "./index";
import { Product } from "types/inventory";

const fetchPreviousPurchases = async (
  pk: number
): Promise<PreviousPurchaseResponse[]> => {
  const url = PREVIOUS_ORDERS_URI(pk);
  const response = await authorizedGet({ url });
  if (response.ok) {
    return await response.json();
  }
  return [];
};

export const getFavourites = async (pk: number): Promise<Product[]> => {
  const favouriteThreshold = 3; // Products bought three times or more in the latest purchases are considered favourites

  const previousPurchase = await fetchPreviousPurchases(pk);

  return previousPurchase
    .flatMap((previousPurchase) => previousPurchase.orders)
    .reduce((acc, current) => {
      // Accumulate all purchase quantities for each product
      const existingOrderResponse = acc.find((orderResponse) =>
        orderResponse.content_object && current.content_object
          ? orderResponse.content_object.pk === current.content_object.pk
          : null
      );
      if (existingOrderResponse) {
        // Update array in an immutable-friendly way
        const mutatedOrderResponse = {
          ...existingOrderResponse,
          quantity: existingOrderResponse.quantity + current.quantity,
        };
        // Replace old OrderResponse instance with a new one with an updated quantity count
        return [
          ...acc.filter((obj) =>
            obj.content_object && current.content_object
              ? obj.content_object.pk !== current.content_object.pk
              : null
          ),
          mutatedOrderResponse,
        ];
      } else {
        return [...acc, current];
      }
    }, [] as OrderResponse[])
    .filter((orderResponse) => orderResponse.quantity >= favouriteThreshold) // Only display products that the users have bought 3 times or more
    .sort((p1, p2) => p2.quantity - p1.quantity) // Sort by descending purchase quantity
    .map((orderResponse) => orderResponse.content_object);
};
