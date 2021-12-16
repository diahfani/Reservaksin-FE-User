import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HeroSection from "./HeroSection";

test("should render button masuk & register", () => {
  render(
    <MemoryRouter>
      <HeroSection  />
    </MemoryRouter>
  );
  screen.debug();
});
