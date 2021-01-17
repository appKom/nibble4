import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ShopItem from "../ShopItem";
import { Product } from "types/inventory";

const mockProduct: Product = {
  pk: 95,
  name: "Powerking",
  description: "Energidrikk",
  price: 10,
  image: {
    sm: "/media/images/responsive/sm/38688f77-21b6-4936-8ba6-c976538fb110.png",
  },
  category: {
    pk: 3,
    name: "Drikke",
  },
};

afterEach(cleanup);
it("renders", () => {
  const { asFragment } = render(<ShopItem product={mockProduct} />);
  expect(asFragment()).toMatchSnapshot();
});
