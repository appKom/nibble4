import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import { StateContext } from "state/state";
import { fullContext, emptyContext } from "setupTests";

afterEach(cleanup);

describe("Snapshot tests for app", () => {
  it("Should match snapshot(store)", () => {
    const { asFragment } = render(
      <StateContext.Provider value={fullContext}>
        <App />
      </StateContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("Should match snapshot(login)", () => {
    const { asFragment } = render(
      <StateContext.Provider value={emptyContext}>
        <App />
      </StateContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
