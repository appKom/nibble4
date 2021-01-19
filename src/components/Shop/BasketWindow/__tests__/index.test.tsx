import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BasketWindow from "../index";
import { StateContext, State, StateContextProps } from "state/state";
import { userContext, fullContext } from "setupTests";

afterEach(cleanup);

describe("Unit-testing for BasketWindow", () => {
  it("Should match snapshot", () => {
    const { asFragment } = render(
      <StateContext.Provider value={userContext}>
        <BasketWindow />
      </StateContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Integration test for BasketWindow with a BasketItem", () => {
  it("Should render with an BasketItem", () => {
    const { asFragment } = render(
      <StateContext.Provider value={fullContext}>
        <BasketWindow />
      </StateContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
