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
