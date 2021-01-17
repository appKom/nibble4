import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavBar from "../NavBar";

afterEach(cleanup);
it("renders", () => {
  const { asFragment } = render(<NavBar />);
  expect(asFragment()).toMatchSnapshot();
});
