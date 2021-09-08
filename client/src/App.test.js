import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("components", () => {
  test("should render header", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/ToDo/i);
    expect(linkElement).toBeInTheDocument();
  });
});
