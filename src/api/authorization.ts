import { authorizedGet, LOGIN_URI } from "api";
import { UserResponse } from "types/api";
import { User } from "types/user";
import { fetchToken } from "api/token";

const getUser = async (url: string): Promise<Response> => {
  const response = await authorizedGet({ url });
  // No token
  if (response.status == 401) {
    await fetchToken();
    const retryResponse = await authorizedGet({ url });
    return retryResponse;
  }
  return response;
};

export const login = async (rfid: string): Promise<UserResponse> => {
  const url = LOGIN_URI("0331138638");
  const response = await getUser(url);
  const json = await response.json();
  return json as UserResponse;
};

export const handleRfid = async (rfid: string): Promise<User | null> => {
  const user = await login("0331138638");
  if (user.count) {
    // As it returns a weird response
    const { pk, saldo, first_name } = user.results[0]; // The first and only user
    return { pk, balance: saldo, first_name };
  }
  return null;
};
