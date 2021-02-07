import { get, put, post, OLCOINS_USER_URI } from "api";

//make transaction

export const olCoinsLogin = async (pk: number) => {
  const url = OLCOINS_USER_URI(pk);
  const response = await get({ url });
  const json = await response.json();
  return json;
};

export const olCoinsRegister = async (pk: number) => {
  const url = OLCOINS_USER_URI(pk);
  const response = await put({ url });
  const json = await response.json();
  return json;
};

export const olCoinsTransaction = async (
  pk: number,
  transactionTotal: number
) => {
  const url = OLCOINS_USER_URI(pk);
  const body = { coins: 50 };
  const response = await post({ url, body });
  const json = await response.json();
  return json;
};
