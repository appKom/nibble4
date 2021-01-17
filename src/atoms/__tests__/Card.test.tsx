import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "../Card";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(
    <Card>
      <p> Testing test </p>
    </Card>
  );
  expect(asFragment()).toMatchSnapshot();
});
