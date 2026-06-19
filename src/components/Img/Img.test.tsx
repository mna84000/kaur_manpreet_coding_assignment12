import { render, screen } from "@testing-library/react";
import { Img } from "./Img";

test("renders image", () => {
  render(<Img alt="Sample Image" />);
  expect(screen.getByAltText("Sample Image")).toBeInTheDocument();
});

test("renders image in disabled state", () => {
  render(<Img alt="Disabled Image" disabled />);
  expect(screen.getByAltText("Disabled Image")).toBeInTheDocument();
});