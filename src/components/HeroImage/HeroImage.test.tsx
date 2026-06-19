import { render, screen } from "@testing-library/react";
import { HeroImage } from "./HeroImage";

test("renders hero image", () => {
  render(<HeroImage />);
  expect(screen.getByText("Hero Image")).toBeInTheDocument();
});

test("renders hero image in disabled state", () => {
  render(<HeroImage disabled />);
  expect(screen.getByText("Hero Image")).toBeInTheDocument();
});