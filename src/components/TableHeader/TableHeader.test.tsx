import { render, screen } from "@testing-library/react";
import { TableHeader } from "./TableHeader";

test("renders table header", () => {
  render(<table><tbody><tr><TableHeader /></tr></tbody></table>);
  expect(screen.getByText("Table Header")).toBeInTheDocument();
});

test("renders table header in disabled state", () => {
  render(<table><tbody><tr><TableHeader disabled /></tr></tbody></table>);
  expect(screen.getByText("Table Header")).toBeInTheDocument();
});