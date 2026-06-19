import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

test("renders text", () => {
  render(<Text text="Sample Text" />);
  expect(screen.getByText("Sample Text")).toBeInTheDocument();
});

test("renders text in disabled state", () => {
  render(<Text text="Disabled Text" disabled />);
  expect(screen.getByText("Disabled Text")).toBeInTheDocument();
});