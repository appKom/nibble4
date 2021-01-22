import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LoginPage from "../LoginPage";
import { StateContext } from "state/state";
import { mockEmptyContext } from "setupTests";

afterEach(cleanup);

it("Should match snapshot", () => {
  const { asFragment } = render(
    <StateContext.Provider value={mockEmptyContext}>
      <LoginPage testActive={true} />
    </StateContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
