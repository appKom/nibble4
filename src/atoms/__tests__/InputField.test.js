import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InputField from "../InputField";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<InputField />);
  expect(asFragment()).toMatchSnapshot();
});
