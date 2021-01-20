import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PurchaseModal from "../PurchaseModal";
import { StateContext } from "state/state";
import { fullContext } from "setupTests";

afterEach(cleanup);

it("Should match snapshot", () => {
  const { asFragment } = render(
    <StateContext.Provider value={fullContext}>
      <PurchaseModal />
    </StateContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
