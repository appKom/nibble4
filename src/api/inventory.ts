import { Product } from "types/inventory";
import { get } from "./index";

const fetchInventory = async (url: string): Promise<Product[]> => {
  const response = await get({ url }).catch(() => Promise.resolve(undefined));
  if (response && response.ok) {
    const json = await response.json();
    return json.sort((a: Product, b: Product) => (a.name > b.name ? 1 : -1));
  }
  return [];
};

export default fetchInventory;
