import { render, screen } from "@testing-library/react";
import { TableRow } from "./TableRow";

test("renders table row", () => {
  render(<TableRow />);
  expect(screen.getByText("Table Row")).toBeInTheDocument();
});

test("renders table row in disabled state", () => {
  render(<TableRow disabled />);
  expect(screen.getByText("Table Row")).toBeInTheDocument();
});