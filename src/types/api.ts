export interface UserResponse {
  count: number;
  next: any;
  previous: any;
  results: Array<{
    pk: number;
    first_name: string;
    last_name: string;
    saldo: number;
  }>;
}

export const isUserResponse = (value: any): value is UserResponse => {
  return typeof value.count === "number" || value.results === "object";
};
