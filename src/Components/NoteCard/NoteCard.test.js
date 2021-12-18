import { render, screen } from "@testing-library/react";
import NoteCard from "./NoteCard";

describe("NoteCard", () => {
  test("should render components", () => {
    render(<NoteCard />);

    expect(screen.getByRole("heading", { level: 6 })).toHaveTextContent(/Catatan/i);
  });

  test("should render data", () => {
    const data = ["testing", "Halo"];

    render(<NoteCard data={data} />);

    expect(screen.getByText(/Halo/i)).toBeInTheDocument();
  });
});
