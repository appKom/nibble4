import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ShopWindow from "../index";

afterEach(cleanup);
it("renders", () => {
  const { asFragment } = render(<ShopWindow />);
  expect(asFragment()).toMatchSnapshot();
});
