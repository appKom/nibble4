import { Product } from "types/inventory";
import { get } from "./index";

const fetchInventory = async (url: string): Promise<Product[]> => {
  const response = await get({ url });
  if (response.ok) {
    const json = await response.json();
    return json.sort((a: Product, b: Product) => (a.name > b.name ? 1 : -1));
  }
  return [];
};

export default fetchInventory;
