import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Scanner from "../Scanner";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<Scanner />);
  expect(asFragment()).toMatchSnapshot();
});
