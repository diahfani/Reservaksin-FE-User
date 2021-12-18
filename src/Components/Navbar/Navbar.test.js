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

    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });

  test("should render button Profile when isLoggedIn is false", () => {
    render(
      <MemoryRouter>
        <Navbar isLoggedIn={true} />
      </MemoryRouter>
    );

    expect(screen.getByText(/Profile/i)).toBeInTheDocument();
  });
});
