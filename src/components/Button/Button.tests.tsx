import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

test("button is visible", () => {
  render(<Button text="Click Me" />);
  expect(screen.getByText("Click Me")).toBeVisible();
});

test("button background changes when disabled", () => {
  render(<Button text="Disabled Button" disabled />);
  expect(screen.getByText("Disabled Button")).toHaveStyle(
    "background-color: #cccccc"
  );
});