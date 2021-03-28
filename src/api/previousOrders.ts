import { PREVIOUS_ORDERS_URI, authorizedGet } from "./index";
import { OrderLineResponse } from "../types/api";

const getPreviousOrders = async (pk: number): Promise<OrderLineResponse[]> => {
  const url = PREVIOUS_ORDERS_URI(pk);
  const response = await authorizedGet({ url });
  const json = await response.json();
  return json.results;
};

export default getPreviousOrders;
