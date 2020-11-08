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
export type CartItem = {
  object_id: number;
  quantity: number;
};

export const getCategories = (inventory: Product[]) =>
  inventory.reduce(
    (acc, current) => {
      if (acc.includes(current.category.name)) {
        return [...acc];
      }
      return [...acc, current.category.name];
    },
    ["Alt"] as string[]
  );

export const createCartItem = (id: number): CartItem => ({
  object_id: id,
  quantity: 1,
});

export const incrementCartItem = (item: CartItem): CartItem => ({
  ...item,
  quantity: item.quantity + 1,
});

export const decrementCartItem = (item: CartItem): CartItem => ({
  ...item,
  quantity: item.quantity - 1,
});
