export type Product = {
  pk: number;
  name: string;
  description: string;
  price: number;
  image: {
    sm: string;
  };
  category: {
    pk: number;
    name: string;
  };
};
