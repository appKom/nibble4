import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Window from "../Window";
import { StateContext } from "state/state";
import { fullContext } from "setupTests";

afterEach(cleanup);

it("Should match snapshot", () => {
  const { asFragment } = render(
    <StateContext.Provider value={fullContext}>
      <Window />
    </StateContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
