import { olCoinsGet, olCoinsPut, olCoinsPost, OLCOINS_USER_URI } from "api";
import { UserOlCoinsresponse } from "types/api";
import { OlCoinsUser } from "types/user";

export const olCoinsLogin = async (
  pk: number
): Promise<UserOlCoinsresponse | undefined> => {
  const url = OLCOINS_USER_URI(pk);
  const response = await olCoinsGet({ url });
  if (response.ok) {
    const json = await response.json();
    return json as UserOlCoinsresponse;
  } else return undefined;
};

export const olCoinsRegister = async (
  pk: number
): Promise<UserOlCoinsresponse> => {
  const url = OLCOINS_USER_URI(pk);
  const response = await olCoinsPost({ url });
  console.log(response);
  const json = await response.json();
  return json as UserOlCoinsresponse;
};

export const olCoinsTransaction = async (
  pk: number,
  transactionTotal: number
): Promise<Response> => {
  const url = OLCOINS_USER_URI(pk);
  const body = { coins: transactionTotal };
  const response = await olCoinsPut({ url, body });
  return response;
};

export const handleLogin = async (pk: number): Promise<OlCoinsUser> => {
  const olCoinsUser = await olCoinsLogin(pk);
  if (olCoinsUser) return olCoinsUser as OlCoinsUser;
  else {
    const newOlCoinsUser = await olCoinsRegister(pk);
    return newOlCoinsUser as OlCoinsUser;
  }
};
