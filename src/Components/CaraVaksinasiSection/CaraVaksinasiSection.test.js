import { screen, render } from "@testing-library/react";
import CaraVaksinasiSection from "./CaraVaksinasiSection";

describe("CaraVaksinasiSection", () => {
  test("should render h1", () => {
    render(<CaraVaksinasiSection />);
    expect(
      screen.getByText(/Tata Cara Reservasi Vaksinasi COVID-19/i)
    ).toBeInTheDocument();
  });
});
