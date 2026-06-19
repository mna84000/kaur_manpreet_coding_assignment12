import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

test("renders card", () => {
  render(<Card title="Card Title" />);
  expect(screen.getByText("Card Title")).toBeInTheDocument();
});

test("renders card in disabled state", () => {
  render(<Card title="Disabled Card" disabled />);
  expect(screen.getByText("Disabled Card")).toBeInTheDocument();
});