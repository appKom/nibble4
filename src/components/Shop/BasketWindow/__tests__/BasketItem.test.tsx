import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BasketItem from "../BasketItem";
import { StateContext, State, StateContextProps } from "state/state";
import { fullContext } from "setupTests";

afterEach(cleanup);

it("Should match snapshot", () => {
  const { asFragment } = render(
    <StateContext.Provider value={fullContext}>
      <BasketItem id={95} quantity={95} />
    </StateContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
