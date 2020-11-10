export const cancelRegisterRoute = {
  pathname: "/",
  state: { register: false },
};
export const registerCardRoute = (rfid: string): Record<string, unknown> => ({
  pathname: "/",
  state: { register: true, rfid },
});
export const shopRoute = "/shop";
export const initialRoute = "/";
