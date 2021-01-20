import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ErrorModal from "../ErrorModal";

afterEach(cleanup);

it("Should match snapshot", () => {
  const { asFragment } = render(<ErrorModal />);
  expect(asFragment()).toMatchSnapshot();
});
