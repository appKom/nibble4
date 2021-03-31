import { Product } from "../types/inventory";

export const LOGIN_URL = (code: string, rfid: string): string =>
  `https://nibble4-validator.azurewebsites.net/api/login?code=${code}&&rfid=${rfid}`;
export const FETCH_INVENTORY_URL = (code: string): string =>
  `https://nibble4-validator.azurewebsites.net/api/fetchInventory?code=${code}`;
export const PURCHASE_URL = (code: string): string =>
  `https://nibble4-validator.azurewebsites.net/api/purchase?code=${code}`;
export const REGISTER_URL = (code: string): string =>
  `https://nibble4-validator.azurewebsites.net/api/createUser?code=${code}`;

export const IMAGE_URI = (sm: string): string => `https://online.ntnu.no/${sm}`;

type AJAXArguments = {
  url: string;
  body?: Record<string, unknown> | string;
  headers?: HeadersInit_;
};

export const get = ({ url, body, headers }: AJAXArguments): Promise<Response> =>
  fetch(url, {
    method: "GET",
    body: JSON.stringify(body),
    headers: headers,
  });

export const post = ({
  url,
  body,
  headers,
}: AJAXArguments): Promise<Response> =>
  fetch(url, {
    method: "POST",
    body: typeof body === "string" ? body : JSON.stringify(body),
    headers,
  });

export const fetchInventory = async (): Promise<Product[]> => {
  const url = FETCH_INVENTORY_URL(localStorage.getItem("AZURE_DEFAULT_TOKEN")!);
  const response = await get({ url });
  if (response.ok) {
    const json = await response.json();
    return json.sort((a: Product, b: Product) => (a.name > b.name ? 1 : -1));
  }
  return [];
};
