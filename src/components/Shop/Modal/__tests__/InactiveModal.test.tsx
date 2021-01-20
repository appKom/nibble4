import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InactiveModal from "../InactiveModal";
import { StateContext } from "state/state";
import { fullContext } from "setupTests";

afterEach(cleanup);

it("Should match snapshot", () => {
  const { asFragment } = render(
    <StateContext.Provider value={fullContext}>
      <InactiveModal />
    </StateContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
