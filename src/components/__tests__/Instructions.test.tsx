import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Instructions from "../Instructions";

afterEach(cleanup);
it("renders", () => {
  const { asFragment } = render(<Instructions />);
  expect(asFragment()).toMatchSnapshot();
});
