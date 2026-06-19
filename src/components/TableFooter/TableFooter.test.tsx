import { render, screen } from "@testing-library/react";
import { TableFooter } from "./TableFooter";

test("renders table footer", () => {
  render(<TableFooter />);
  expect(screen.getByText("Table Footer")).toBeInTheDocument();
});

test("renders table footer in disabled state", () => {
  render(<TableFooter disabled />);
  expect(screen.getByText("Table Footer")).toBeInTheDocument();
});