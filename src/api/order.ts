import { TRANSACTION_URI as url, authorizedPost } from "./index";
import { CartItem } from "../types/inventory";
import { OrderLineFormat } from "../types/api";

const purchaseItems = (
  id: number,
  orders: { [id: number]: CartItem }
): Promise<Response> => {
  const body: OrderLineFormat = {
    user: id,
    orders: Object.values(orders),
  };
  return authorizedPost({ url, body });
};

export default purchaseItems;
