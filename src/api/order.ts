import { PURCHASE_URL, post } from "./index";
import { CartItem } from "../types/inventory";
import { OrderLineFormat } from "../types/api";

const purchaseItems = (
  id: number,
  orders: { [id: number]: CartItem }
): Promise<Response> => {
  const url = PURCHASE_URL(localStorage.getItem("AZURE_DEFAULT_TOKEN")!);
  const body: OrderLineFormat = {
    user: id,
    orders: Object.values(orders),
  };
  return post({ url, body });
};

export default purchaseItems;
