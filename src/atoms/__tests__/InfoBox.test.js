import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InfoBox from "../InfoBox";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<InfoBox>Test</InfoBox>);
  expect(asFragment()).toMatchSnapshot();
});
