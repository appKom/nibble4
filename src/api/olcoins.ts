import { get, put, postWithHeader, OLCOINS_USER_URI } from "api";
import { UserOlCoinsresponse } from "types/api";
import { OlCoinsUser } from "types/user";

export const olCoinsLogin = async (pk: number) => {
  const url = OLCOINS_USER_URI(pk);
  const response = await get({ url });
  const json = await response.json();
  return json as UserOlCoinsresponse;
};

export const olCoinsRegister = async (pk: number) => {
  const url = OLCOINS_USER_URI(pk);
  const response = await put({ url });
  const json = await response.json();
  return json as UserOlCoinsresponse;
};

export const olCoinsTransaction = async (
  pk: number,
  transactionTotal: number
) => {
  const url = OLCOINS_USER_URI(pk);
  const body = { coins: transactionTotal };
  const response = await postWithHeader({ url, body });
  return response;
};

export const handleLogin = async (pk: number) => {
  const olCoinsUser = await olCoinsLogin(pk);
  if (olCoinsUser.id) return olCoinsUser as OlCoinsUser;
  else {
    const newOlCoinsUser = await olCoinsRegister(pk);
    return newOlCoinsUser as OlCoinsUser;
  }
};
