import { fireEvent, screen, render } from "@testing-library/react";
import KriteriaVaksinSection from "./KriteriaVaksinSection";

describe("SyaratVaksinSection", () => {
  test("testing select input change state", () => {
    render(<KriteriaVaksinSection />);

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "astraZeneca" },
    });

    let options = screen.getAllByRole("option");

    expect(options[0].selected).toBe(false)
    expect(options[1].selected).toBe(true)
    expect(options[2].selected).toBe(false)
    expect(options[3].selected).toBe(false)
  });
});
