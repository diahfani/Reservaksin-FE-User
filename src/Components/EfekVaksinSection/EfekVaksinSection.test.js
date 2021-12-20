import { screen, render } from "@testing-library/react";
import EfekVaksinSection from "./EfekVaksinSection";

describe("EfekVaksinSection", () => {
  test("should render text", () => {
    const { container } = render(<EfekVaksinSection />);

    expect(container.querySelector("h1")).toBeInTheDocument();
    
  });
});
