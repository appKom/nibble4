import {
  authorizedGet,
  authorizedPost,
  LOGIN_URI,
  REGISTER_RFID_URI,
} from "api";
import { UserResponse } from "types/api";
import { User } from "types/user";
import { fetchToken } from "api/token";
//import { getFavourites } from "./favourites";

const getUser = async (url: string): Promise<Response> => {
  const response = await authorizedGet({ url });
  // No token
  if (response.status == 401) {
    await fetchToken();
    return await authorizedGet({ url });
  }
  return response;
};

export const login = async (rfid: string): Promise<UserResponse | null> => {
  const url = LOGIN_URI(rfid);
  const response = await getUser(url).catch(() => Promise.resolve(undefined));
  if (response && response.ok) {
    const json = await response.json();
    return json as UserResponse;
  } else return null;
};

export const handleRfid = async (rfid: string): Promise<User | null> => {
  const user = await login(rfid);
  if (user) {
    //error in req
    if (user.count) {
      //user OK
      const { pk, saldo, first_name } = user.results[0]; // The first and only user
      //const favourites = await getFavourites(pk);
      return { pk, balance: saldo, first_name, favourites: [] };
    } else return { pk: -1, balance: -1, first_name: "-1", favourites: [] };
  }
  return null;
};

export const registerUser = (
  username: string,
  password: string,
  rfid: string
): Promise<Response> => {
  const data = {
    username,
    password,
    rfid,
  };
  return authorizedPost({ url: REGISTER_RFID_URI, body: data });
};
