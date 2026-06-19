import { render, screen } from "@testing-library/react";
import { Table } from "./Table";

test("renders table", () => {
  render(<Table />);
  expect(screen.getByText("Sample Table")).toBeInTheDocument();
});

test("renders table in disabled state", () => {
  render(<Table disabled />);
  expect(screen.getByText("Disabled Table")).toBeInTheDocument();
});