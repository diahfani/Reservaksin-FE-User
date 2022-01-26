import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HeroSection from "./HeroSection";

describe("HeroSection", () => {
  test("should render button Masuk & Ergister", () => {
    render(
      <MemoryRouter>
        <HeroSection isLoggedIn={false} />
      </MemoryRouter>
    );

    expect(screen.getByTestId("button-login")).toBeInTheDocument();
    expect(screen.getByTestId("button-register")).toBeInTheDocument();
  });

  test("should render button Reservasi & Profile", () => {
    render(
      <MemoryRouter>
        <HeroSection isLoggedIn={true} />
      </MemoryRouter>
    );

    expect(screen.getByTestId("button-reservasi")).toBeInTheDocument();
    expect(screen.getByTestId("button-profile")).toBeInTheDocument();
  });
});
