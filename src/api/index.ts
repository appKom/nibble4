import { loadToken } from "api/token";

export const CLIENT_ID = encodeURIComponent(
  process.env.REACT_APP_CLIENT_ID || ""
);
export const CLIENT_SECRET = encodeURIComponent(
  process.env.REACT_APP_CLIENT_SECRET || ""
);

const API_BASE = process.env.REACT_APP_API_BASE || "";
export const AUTHORIZE_URI = `${API_BASE}/auth/`;
export const REGISTER_RFID_URI = `${API_BASE}/rfid/`;
export const INVENTORY_URI = `${API_BASE}/inventory/`;
export const BALANCE_URI = `${API_BASE}/transactions/`; // Update balance
export const TRANSACTION_URI = `${API_BASE}/orderline/`; // purchase item
export const PREVIOUS_ORDERS_URI = (pk: number): string =>
  `${API_BASE}/orderline/userorders/?pk=${pk}`;
export const LOGIN_URI = (rfid: string): string =>
  `${API_BASE}/usersaldo/?rfid=${rfid}`;

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

export const authorizedGet = ({
  url,
  body,
  headers,
}: AJAXArguments): Promise<Response> =>
  get({
    url,
    body,
    headers: {
      ...headers,
      Authorization: `Bearer ${loadToken()}`,
      "Content-Type": "application/json",
    },
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

export const authorizedPost = ({
  url,
  body,
  headers,
}: AJAXArguments): Promise<Response> =>
  post({
    url,
    body,
    headers: {
      ...headers,
      "Content-Type": "application/json",
      Authorization: `Bearer ${loadToken()}`,
    },
  });
