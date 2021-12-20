import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "./Footer";

describe("Footer", () => {
  test("should render link", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
  });
});
