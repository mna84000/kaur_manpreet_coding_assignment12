import { render, screen } from "@testing-library/react";
import { RadioButton } from "./RadioButton";

test("renders radio button", () => {
  render(<RadioButton />);
  expect(screen.getByRole("radio")).toBeInTheDocument();
});

test("renders radio button in disabled state", () => {
  render(<RadioButton disabled />);
  expect(screen.getByRole("radio")).toBeDisabled();
});