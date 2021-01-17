import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CategoryButton from "../CategoryButton";

afterEach(cleanup);
it("renders", () => {
  const { asFragment } = render(<CategoryButton category="Alt" />);
  expect(asFragment()).toMatchSnapshot();
});
