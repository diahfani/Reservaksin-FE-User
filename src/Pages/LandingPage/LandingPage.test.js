import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LandingPage from "./LandingPage";

describe("Landing Page", () => {
  test("should render profile button", () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );

    expect(
      screen.getByText(
        "Layanan Informasi Terpadu & Reservasi Vaksinasi COVID-19"
      )
    ).toBeInTheDocument();
  });
});
