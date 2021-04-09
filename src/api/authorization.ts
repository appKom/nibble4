import {
  authorizedGet,
  authorizedPost,
  LOGIN_URI,
  REGISTER_RFID_URI,
} from "api";
import { UserResponse } from "types/api";
import { User } from "types/user";
import { fetchToken } from "api/token";
import { fetchFavourites } from "./favourites";

const getUser = async (url: string): Promise<Response> => {
  const response = await authorizedGet({ url });
  // No token
  if (response.status == 401) {
    await fetchToken();
    return await authorizedGet({ url });
  }
  return response;
};

export const login = async (rfid: string): Promise<UserResponse> => {
  const url = LOGIN_URI(rfid);
  const response = await getUser(url);
  const json = await response.json();
  return json as UserResponse;
};

export const handleRfid = async (rfid: string): Promise<User | null> => {
  const user = await login(rfid);
  if (user.count) {
    // As it returns a weird response
    const { pk, saldo, first_name } = user.results[0]; // The first and only user
    const favourites = await fetchFavourites(pk);
    return { pk, balance: saldo, first_name, favourites };
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
