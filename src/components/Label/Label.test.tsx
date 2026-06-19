import { render, screen } from "@testing-library/react";
import { Label } from "./Label";

test("renders label", () => {
  render(<Label text="Label Text" />);
  expect(screen.getByText("Label Text")).toBeInTheDocument();
});

test("renders label in disabled state", () => {
  render(<Label text="Disabled Label" disabled />);
  expect(screen.getByText("Disabled Label")).toBeInTheDocument();
});