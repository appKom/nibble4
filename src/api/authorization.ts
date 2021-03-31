import { LOGIN_URL, REGISTER_URL, get, post } from "api";
import { UserResponse } from "types/api";
import { User } from "types/user";

export const login = async (rfid: string): Promise<UserResponse> => {
  const url = LOGIN_URL(localStorage.getItem("AZURE_DEFAULT_TOKEN")!, rfid);
  const response = await get({ url });
  const json = await response.json();
  return json as UserResponse;
};

export const handleRfid = async (rfid: string): Promise<User | null> => {
  const user = await login(rfid);
  if (user.count) {
    const { pk, saldo, first_name } = user.results[0]; // The first and only user
    return { pk, balance: saldo, first_name };
  }
  return null;
};

export const registerUser = (
  username: string,
  password: string,
  rfid: string
): Promise<Response> => {
  const url = REGISTER_URL(localStorage.getItem("AZURE_DEFAULT_TOKEN")!);
  const data = {
    username,
    password,
    rfid,
  };
  return post({ url, body: data });
};
