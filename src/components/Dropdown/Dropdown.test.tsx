import { render, screen } from "@testing-library/react";
import { Dropdown } from "./Dropdown";

test("renders dropdown", () => {
  render(<Dropdown />);
  expect(screen.getByRole("combobox")).toBeInTheDocument();
});

test("renders dropdown in disabled state", () => {
  render(<Dropdown disabled />);
  expect(screen.getByRole("combobox")).toBeDisabled();
});