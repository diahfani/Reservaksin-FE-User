import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar", () => {
  test("should render button Login when isLoggedIn is false", () => {
    render(
      <MemoryRouter>
        <Navbar isLoggedIn={false} />
      </MemoryRouter>
    );
  });

  test("should render button Profile when isLoggedIn is true", () => {
    render(
      <MemoryRouter>
        <Navbar isLoggedIn={true} />
      </MemoryRouter>
    );
  });
});
