import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

test("render default banner background colour", () => {
  const { getByTestId } = render(<Banner />);
  const bannerElement = getByTestId("banner");

  expect(bannerElement).toHaveClass(
    "bg-gradient-to-r from-lime-L1 to-lime-L3  border-b-lime"
  );
});

test("render default banner text", () => {
  const { getByTestId } = render(<Banner />);
  const bannerText = getByTestId("banner-text");

  expect(bannerText.contains("Nur für kurze Zeit!")).toBeTruthy();
});
