import { screen, render } from "@testing-library/react";
import SyaratVaksinSection from "./SyaratVaksinSection";

describe("CaraVaksinasiSection", () => {
  test("should display component", () => {
    render(<SyaratVaksinSection />);

    expect(screen.getByTestId("title")).toBeInTheDocument();
  });
});
