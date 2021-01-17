import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Register from "../Register";

afterEach(cleanup);
it("renders", () => {
  const { asFragment } = render(<Register rfid={123456789} />);
  expect(asFragment()).toMatchSnapshot();
});
