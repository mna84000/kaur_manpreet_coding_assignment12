import { render, screen } from "@testing-library/react";
import { TableCell } from "./TableCell";

test("renders table cell", () => {
  render(<TableCell />);
  expect(screen.getByText("Table Cell")).toBeInTheDocument();
});

test("renders table cell in disabled state", () => {
  render(<TableCell disabled />);
  expect(screen.getByText("Table Cell")).toBeInTheDocument();
});